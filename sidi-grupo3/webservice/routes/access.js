const express = require("express");
const router = express.Router();
const ModelAccess = require("../model/ModelAccess");

router.post("/", async (req, res) => {
  try {
    const { timestamp, hostname, ip } = req.body;

    if (!timestamp || !hostname || !ip) {
      return res.status(400).json({ error: "Falta de parâmetros" });
    }

    const modelAccess = new ModelAccess();
    await modelAccess.postAccess(timestamp, hostname, ip);

    res.status(200).json({ message: "Dados de acesso inseridos com sucesso" });
  } catch (error) {
    console.error("Erro ao inserir dados de acesso:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = router;
