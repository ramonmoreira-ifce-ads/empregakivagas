import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

export async function POST(request) {
  try {
    const body = await request.json();

    const vaga = {
      titulo: body.titulo || null,
      descricao: body.descricao || null,
      requisitos: body.requisitos || null,
      areaatuacao: body.areaAtuacao || null,
      localizacao: body.localizacao || null,
      contato: body.contato || null,
      datalimite: body.dataLimite || null,

      // campos numéricos (tratamento obrigatório)
      salario: body.salario ? Number(body.salario) : null,
      cargahoraria: body.cargaHoraria ? Number(body.cargaHoraria) : null,
      numerovagas: body.numeroVagas ? Number(body.numeroVagas) : null,
    };

    const { error } = await supabase
      .from("vagasrascunho")
      .insert([vaga]);

    if (error) {
      console.error("Erro Supabase:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Rascunho salvo com sucesso" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Erro interno:", err);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}