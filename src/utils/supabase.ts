import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://fdkudaenyarfoteevtqr.supabase.co"
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZka3VkYWVueWFyZm90ZWV2dHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NzAyNzIsImV4cCI6MjAwOTM0NjI3Mn0.iYc5YLr8XU3s2vifzYPDD1gVITJFTtAgxjFmIfg4FdU"

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase