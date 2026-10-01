class frotaVeiculos {
    async getAll(){
        const res = await Pool.query("select * from frota_veiculos");
        return res.rows
    }
    async post(dados){
        const res = await Pool.query("insert into frota_veiculos", [dados]);
        return res.rows(0)
    } 

    async listarDisponibilidade(dados, id){
        const res = await Pool.query("select * from frota_veiculos where id = $1 ", [dados, id]);
        return res.rows(0)

    }

async deletar(dados, id){
        const res = await Pool.query("delete from frota_veiculos where id = $1 ", [dados, id]);
        return res.rows(0)

    }
}
export const frotaVeiculos = new frotaVeiculos();