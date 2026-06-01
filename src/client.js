import { createClient } from '@supabase/supabase-js'

const URL = 'https://sdblhednrurlzexpdybf.supabase.co'
const API_KEY = 'sb_publishable_J0lH9BAkqdc7F0AzgDoaeQ_bQm095cD'

export const supabase = createClient(URL, API_KEY)