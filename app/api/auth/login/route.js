import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(req, res) {
  const { userPassword, userEmail } = await req.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  let { data: userdata, error: loginError } =
    await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });

  if (loginError) {
    // wronUser();
    console.log("wrng user or pass");
    return NextResponse.json({
      status: 400,
      userdata: "wrng user or pass",
    });
  } else {
    let { data: signeduser, error: userError } = await supabase
      .from("user")
      .select("*")
      .eq("id", userdata.user.id);
    if (userError) {
      return NextResponse.json({
        status: 401,
        userdata: "user error",
      });
    } else {
      if (signeduser[0]?.disabled) {
        console.log("disabled ",signeduser[0]?.disabled)
        await supabase.auth.signOut();
        // notAuthorized();
        console.log("not authorised");
        return NextResponse.json({
          status: 402,
          userdata: "not authorized",
        });
      } else {
        const urds = {
          username: signeduser[0]?.user_name,
          role: signeduser[0]?.user_role,
        };
      
        return NextResponse.json({
          status: 200,
          userdata: urds,
        });
      }
    }
  }
}
