import { NextRequest, NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2";
import { db, queryRows } from "@/lib/server/db";
import { requireAdmin } from "@/lib/server/auth";
interface SettingRow extends RowDataPacket { setting_key:string;setting_value:string }
const allowed=["site_name","blog_title","blog_description","posts_per_page","default_author"];
export async function GET(request:NextRequest){if(!(await requireAdmin(request)))return NextResponse.json({message:"Unauthorized"},{status:401});const rows=await queryRows<SettingRow[]>("SELECT setting_key,setting_value FROM cms_settings");return NextResponse.json({settings:Object.fromEntries(rows.map(row=>[row.setting_key,row.setting_value]))});}
export async function PUT(request:NextRequest){if(!(await requireAdmin(request)))return NextResponse.json({message:"Unauthorized"},{status:401});const body=await request.json();for(const key of allowed){if(body[key]!==undefined)await db.execute("INSERT INTO cms_settings (setting_key,setting_value) VALUES (?,?) ON DUPLICATE KEY UPDATE setting_value=VALUES(setting_value)",[key,String(body[key]).trim()]);}return NextResponse.json({success:true});}
