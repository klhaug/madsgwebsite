import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {visionTool} from '@sanity/vision'
import schemas from "./sanity/config";


const config = defineConfig({
    projectId: 'ukkrtnxl', //id fra prosjektet
    dataset: 'production',
    title: 'madsgwebsitesanity',
    apiVersion: "2024-12-08", //dagens dato
    basePath: '/admin', //hvor man finner Sanity
    plugins: [structureTool(), visionTool()],
    schema: {types: schemas} //en plugin?
})
    
export default config;