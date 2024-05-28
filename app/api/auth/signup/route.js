import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { userPassword, userEmail,user_name,user_role,disabled } = await req.json();
  const requestUrl = new URL(req.url)
  console.log({ userPassword, userEmail });
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: userdata, error: loginError } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      data: {
        user_name: user_name,
        user_role: user_role,
               
      },
    },
  });

  if (loginError) {
    console.log("error ",loginError)
    return NextResponse.json({
      status: 400,
      userdata: loginError,
    });
  } else if (userdata) {
    return NextResponse.json({
      status: 200,
      userdata: userdata,
    });
  }
}
