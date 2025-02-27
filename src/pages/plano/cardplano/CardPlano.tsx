import { Link } from "react-router-dom";
import Plano from "../../../model/Plano";

export interface PlanoProps{ 
    plano: Plano;
}

export default function CardPlano( {plano}: PlanoProps ){

    return (
        <>
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between p-4 gap-4'>
            <p className='text-2xl h-full pl-6'>Plano {plano.nomePlano}</p>
            {plano.id === 1 && 
                <>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center ">Programas</p>
                        <p className="text-center text-sm">Programas de hipertrofia, força e emagrecimento.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000a4] line-through">Acesso ilimitado</p>
                        <p className="text-center text-sm line-through">Acesso ilimitado a 1200 academias.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000a4] line-through">Trancamento de férias</p>
                        <p className="text-center text-sm line-through">Possibilidade de trancar por até 30 dias de férias a cada 12 meses.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000a4] line-through">Studios Exclusivos</p>
                        <p className="text-center text-sm line-through">Treinos personalizados de Vidya, Torq, Burn, Race e Squad.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000a4] line-through">Consultoria</p>
                        <p className="text-center text-sm line-through">Oferecemos assessoria completa de nutricionistas e personal trainers desde o seu primeiro dia..</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000]">A partir de</p>
                        <p className="text-center text-xl font-bold">R$19,90</p>
                        <p className="text-center text-sm">No primeiro mês, depois R$119,90/mês</p>
                    </div>
                </>
            }
            {plano.id === 2 && 
                <>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center">Programas</p>
                        <p className="text-center text-sm">Programas de hipertrofia, força e emagrecimento.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center">Acesso ilimitado</p>
                        <p className="text-center text-sm">Acesso ilimitado a 1200 academias.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000a4]">Trancamento de férias</p>
                        <p className="text-center text-sm line-through">Possibilidade de trancar por até 30 dias de férias a cada 12 meses.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000a4]">Studios Exclusivos</p>
                        <p className="text-center text-sm line-through">Treinos personalizados de Vidya, Torq, Burn, Race e Squad.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000a4] line-through">Consultoria</p>
                        <p className="text-center text-sm line-through">Oferecemos assessoria completa de nutricionistas e personal trainers desde o seu primeiro dia..</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000]">A partir de</p>
                        <p className="text-center text-xl font-bold">R$29,90</p>
                        <p className="text-center text-sm">No primeiro mês, depois R$219,90/mês</p>
                    </div>
                </>
            }
            {plano.id === 3 && 
                <>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center">Programas</p>
                        <p className="text-center text-sm">Programas de hipertrofia, força e emagrecimento.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center">Acesso ilimitado</p>
                        <p className="text-center text-sm">Acesso ilimitado a 1200 academias.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center">Trancamento de férias</p>
                        <p className="text-center text-sm">Possibilidade de trancar por até 30 dias de férias a cada 12 meses.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center">Studios Exclusivos</p>
                        <p className="text-center text-sm">Treinos personalizados de Vidya, Torq, Burn, Race e Squad.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center">Consultoria</p>
                        <p className="text-center text-sm">Oferecemos assessoria completa de nutricionistas e personal trainers desde o seu primeiro dia..</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium text-center text-[#000000]">A partir de</p>
                        <p className="text-center text-xl font-bold">R$319,90</p>
                        <p className="text-center text-sm">No primeiro mês, depois R$319,90/mês</p>
                    </div>
                </>
            }
            <div className="flex">
            <Link to={`/cadastro/${plano.id}`} className='py-2 px-28 text-center text-white bg-black hover:bg-[#000000f1] hover:underline w-full flex items-center justify-center rounded-md'>
                <button>Contratar</button>
            </Link>
            </div>
        </div>
        </>

    )

}
