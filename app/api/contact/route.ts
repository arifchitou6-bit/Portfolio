import { NextResponse } from "next/server";
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validation basique
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    // Message valide - Formspree gère l'envoi dans le frontend
    return NextResponse.json(
      { 
        success: true, 
        message: "Message reçu ! Je te répondrai rapidement."
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur", details: error.message },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
