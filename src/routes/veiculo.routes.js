import { router } from "express";
import { veiculosRouter } from "../services/veiculo.service.js"

export const veiculosRouter = router();

veiculosRouter.get("/", async (req, res) =>{
    const veiculos = await frotaVeiculos.getAll(req.body);
    return res.status(201).json(veiculos);

});

veiculosRouter.post("/", async (req, res) =>{
    const veiculo = await frotaVeiculos.create(req.body);
    return res.status(200).json(veiculo)
});

veiculosRouter.id("/", async (req, res) =>{
    const veiculo = await frotaVeiculos.id(req.body);
    return res.status(200).json(veiculo)
});    