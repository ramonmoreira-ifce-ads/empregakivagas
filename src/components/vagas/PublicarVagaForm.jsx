"use client";
import "./PublicarVagaForm.css";

import { useState } from "react";
import { FiBriefcase, FiFileText, FiMapPin, FiClock, FiUsers, FiPhone } from "react-icons/fi";
import { FaRegMoneyBillAlt } from "react-icons/fa";

export default function PublicarVagaForm() {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    requisitos: "",
    areaAtuacao: "",
    salario: "",
    localizacao: "",
    cargaHoraria: "",
    numeroVagas: "",
    contato: "",
    dataLimite: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // -------------------------
  // Função: Publicar vaga
  // -------------------------
  async function handlePublish(e) {
    e.preventDefault();

    const dataToSend = {
      ...formData,
    };

    console.log("📤 Enviando para vagasDisponiveis:", dataToSend);

    try {
      const res = await fetch("/api/vagas/publicar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!res.ok) {
        alert("Erro ao publicar vaga.");
        return;
      }

      alert("Vaga publicada com sucesso!");
    } catch (error) {
      console.log("Erro ao enviar:", error);
      alert("Falha ao se comunicar com o servidor.");
    }
  }

  // -------------------------
  // Função: Salvar rascunho
  // -------------------------
  async function handleDraft() {
    const dataToSend = {
      ...formData,
    };

    console.log("📤 Enviando para vagasRascunho:", dataToSend);

    try {
      const res = await fetch("/api/vagas/rascunho", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!res.ok) {
        alert("Erro ao salvar rascunho.");
        return;
      }

      alert("Rascunho salvo com sucesso!");
    } catch (error) {
      console.log("Erro ao enviar:", error);
      alert("Falha ao se comunicar com o servidor.");
    }
  }

  return (
    <div className="vaga-container">
      <h2 className="vaga-title">Publique sua vaga</h2>
      <p className="vaga-subtitle">
        Encontre os candidatos certos para sua empresa de forma rápida e transparente
      </p>

      {/* Chama handlePublish */}
      <form className="vaga-form" onSubmit={handlePublish}>
        {/* TÍTULO */}
        <div className="input-group full">
          <label>Título da vaga</label>
          <div className="input-box">
            <FiBriefcase className="icon" />
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Ex: Desenvolvedor Front-end"
            />
          </div>
        </div>

        {/* DESCRIÇÃO */}
        <div className="input-group">
          <label>Descrição detalhada</label>
          <div className="input-box textarea-box">
            <FiFileText className="icon top-icon" />
            <textarea
              name="descricao"
              rows="5"
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Descreva a vaga..."
            ></textarea>
          </div>
        </div>

        {/* REQUISITOS */}
        <div className="input-group">
          <label>Requisitos</label>
          <div className="input-box textarea-box">
            <FiFileText className="icon top-icon" />
            <textarea
              name="requisitos"
              rows="5"
              value={formData.requisitos}
              onChange={handleChange}
              placeholder="Liste os requisitos..."
            ></textarea>
          </div>
        </div>

        {/* ÁREA */}
        <div className="input-group">
          <label>Área de atuação</label>
          <div className="input-box">
            <FiBriefcase className="icon" />
            <input
              type="text"
              name="areaAtuacao"
              value={formData.areaAtuacao}
              onChange={handleChange}
              placeholder="Ex: Tecnologia"
            />
          </div>
        </div>

        {/* SALÁRIO */}
        <div className="input-group">
          <label>Salário inicial</label>
          <div className="input-box">
            <FaRegMoneyBillAlt className="icon" />
            <input
              type="number"
              name="salario"
              value={formData.salario}
              onChange={handleChange}
              placeholder="Ex: 2500"
            />
          </div>
        </div>

        {/* LOCALIZAÇÃO */}
        <div className="input-group">
          <label>Localização</label>
          <div className="input-box">
            <FiMapPin className="icon" />
            <input
              type="text"
              name="localizacao"
              value={formData.localizacao}
              onChange={handleChange}
              placeholder="Cidade / Estado"
            />
          </div>
        </div>

        {/* CARGA HORÁRIA */}
        <div className="input-group">
          <label>Carga horária</label>
          <div className="input-box">
            <FiClock className="icon" />
            <input
              type="text"
              name="cargaHoraria"
              value={formData.cargaHoraria}
              onChange={handleChange}
              placeholder="Ex: 40h semanais"
            />
          </div>
        </div>

        {/* Nº VAGAS */}
        <div className="input-group">
          <label>Nº de vagas</label>
          <div className="input-box">
            <FiUsers className="icon" />
            <input
              type="number"
              name="numeroVagas"
              value={formData.numeroVagas}
              onChange={handleChange}
              placeholder="Ex: 3"
            />
          </div>
        </div>

        {/* CONTATO */}
        <div className="input-group">
          <label>Contato</label>
          <div className="input-box">
            <FiPhone className="icon" />
            <input
              type="text"
              name="contato"
              value={formData.contato}
              onChange={handleChange}
              placeholder="Email ou telefone"
            />
          </div>
        </div>

        {/* DATA */}
        <div className="input-group full">
          <label>Data limite</label>
          <input
            type="date"
            name="dataLimite"
            value={formData.dataLimite}
            onChange={handleChange}
            className="date-input"
          />
        </div>

        {/* BOTÕES */}
        <div className="buttons-row full">
          {/* Chama handleDraft */}
          <button
            type="button"
            className="btn draft"
            onClick={handleDraft}
          >
            Salvar como rascunho
          </button>

          {/* Chama o onSubmit */}
          <button type="submit" className="btn publish">
            Publicar vaga
          </button>
        </div>
      </form>
    </div>
  );
}