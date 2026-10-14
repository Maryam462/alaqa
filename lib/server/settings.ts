import type { RowDataPacket } from "mysql2";
import { localPreviewWithoutDatabase, queryRows } from "@/lib/server/db";
interface SettingRow extends RowDataPacket { setting_key:string;setting_value:string }
export type CmsSettings={site_name:string;blog_title:string;blog_description:string;posts_per_page:string;default_author:string};
const defaults:CmsSettings={site_name:"Alaqa",blog_title:"Notes & Perspectives from Alaqa",blog_description:"Useful ideas on building better products, simplifying work, and reaching more customers.",posts_per_page:"6",default_author:"Alaqa Team"};
export async function getCmsSettings(){if(localPreviewWithoutDatabase)return {...defaults};const rows=await queryRows<SettingRow[]>("SELECT setting_key,setting_value FROM cms_settings");return {...defaults,...Object.fromEntries(rows.map(row=>[row.setting_key,row.setting_value]))} as CmsSettings;}
