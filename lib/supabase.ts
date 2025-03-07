import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://yiqhiothoqojxbpargid.supabase.co",
    process.env.EXPO_PUBLIC_SUPABASE_KEY!
);

export default supabase;