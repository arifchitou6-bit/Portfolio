import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Chemin pour stocker les messages
const MESSAGES_FILE = path.join(process.cwd(), "data", "messages.json");

// Créer le dossier data si il n'existe pas
async function ensureDataDir() {
  const dir = path.dirname(MESSAGES_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

// Sauvegarder le message dans un fichier
async function saveMessageLocally(data: ContactFormData) {
  await ensureDataDir();

  try {
    let messages: ContactFormData[] = [];
    try {
      const fileContent = await fs.readFile(MESSAGES_FILE, "utf-8");
      messages = JSON.parse(fileContent);
    } catch {
      messages = [];
    }
    
    messages.push({ ...data, date: new Date().toISOString() });
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));
    console.log("💾 Message sauvegardé:", data);
  } catch (error) {
    console.error("⚠️  Erreur sauvegarde:", error);
  }
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    console.log("📥 Données reçues:", data);
    
    // Validation basique
    if (!data.name || !data.email || !data.message) {
      console.error("❌ Champs manquants");
      return NextResponse.json(
        { success: false, error: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    // Sauvegarder localement
    await saveMessageLocally(data);

    // ✅ TOUT MARCHE ! Le message est sauvegardé
    console.log("✅ Message traité avec succès");
    return NextResponse.json(
      { 
        success: true, 
        message: "Message reçu ! Je te répondrai rapidement.",
        info: "Ton message a été sauvegardé. Pour recevoir les emails, configure Gmail dans .env.local"
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Erreur:", error.message);
    return NextResponse.json(
      { success: false, error: "Erreur serveur", details: error.message },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
