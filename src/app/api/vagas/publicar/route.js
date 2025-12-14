import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

export async function POST(request) {
  try {
    const body = await request.json();

    const vaga = {
      titulo: body.titulo,
      descricao: body.descricao,
      requisitos: body.requisitos,
      areaatuacao: body.areaAtuacao,
      salario: body.salario,
      localizacao: body.localizacao,
      cargahoraria: body.cargaHoraria,
      numerovagas: body.numeroVagas,
      contato: body.contato,
      datalimite: body.dataLimite,
    };

    const { error } = await supabase
      .from("vagasdisponiveis")
      .insert([vaga]);

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Vaga publicada com sucesso" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}