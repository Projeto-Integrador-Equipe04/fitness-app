import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Sobre(){
  return(
    <div className="flex-grow flex flex-col justify-center items-center">
      <div className="container mx-auto px-4">
        {/* Grid para os Integrantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
            
          {/* Integrante 1 */}
          <div className="rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\bea.jpeg"
              alt="Beatriz Santina"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-black">Beatriz Santina</h2>
            <p className="text-center mt-2"></p>
            <div className='content-evenly flex flex-gap-1'>
            <a href="https://github.com/krocodaimon" target="_blank" rel="noopener noreferrer" className="mt-4">
            <GithubLogo  size={48} weight='bold'/>  
            </a>
            <a href="https://www.linkedin.com/in/beatriz-santina-a6972b1a0/" target="_blank" rel="noopener noreferrer" className="mt-4">
              <LinkedinLogo size={48} weight='bold'/>
            </a>
            </div>
          </div>

          {/* Integrante 2 */}
          <div className="rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\carol.jpeg"
              alt="Caroline Ribeiro"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-black">Caroline Ribeiro</h2>
            <p className="text-center mt-2"></p>
            <div className='content-evenly flex flex-gap-1'>
              <a href="https://github.com/RibeiroCaroline" target="_blank" rel="noopener noreferrer" className="mt-4">             
              <GithubLogo  size={48} weight='bold'/>                  
              </a>
              <a href="https://www.linkedin.com/in/caroline-ribeiro-aa14442b0/" target="_blank" rel="noopener noreferrer" className="mt-4">
              <LinkedinLogo size={48} weight='bold'/>
              </a>
           </div>
          </div>

          {/* Integrante 3 */}
          <div className="rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\iza.jpeg"
              alt="Izabelly Gutierres Silva"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-black">Izabelly Gutierres </h2>
            <p className="text-center mt-2"></p>
            <div className='content-evenly flex flex-gap-1'>
            <a href="https://github.com/izabellygutierres" target="_blank" rel="noopener noreferrer" className="mt-4">
            <GithubLogo  size={48} weight='bold'/>  
            </a>
            <a href="https://www.linkedin.com/in/izabelly-gutierressilva/" target="_blank" rel="noopener noreferrer" className="mt-4" >
            <LinkedinLogo size={48} weight='bold' />

            </a>
            </div>
          </div>

          {/* Integrante 4 */}
          <div className="rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\luan.jpeg"
              alt="Luan Oliveira"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-black">Luan Oliveira</h2>
            <p className="text-center mt-2"></p>
           
           <div className='content-evenly flex flex-gap-1'>
           <a href="https://github.com/luan-tcpn" target="_blank" rel="noopener noreferrer" className="mt-4">
            <GithubLogo  size={48} weight='bold'/>  
            </a>
            <a href="https://www.linkedin.com/in/luan-oliveira-8106a3230/"
            target="_blank" rel="noopener noreferrer" className="mt-4">
            <LinkedinLogo size={48} weight='bold'/>
            </a>
           </div>        
          </div>


          {/* Integrante 5 */}
          <div className="rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\lucas.jpeg"
              alt="Lucas Manhães"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-black">Lucas Manhães</h2>
            <p className="text-center mt-2"></p>
           <div className='content-evenly flex flex-gap-1'>
           <a href="https://github.com/lucasmanhaesr" target="_blank" rel="noopener noreferrer" className="mt-4">
            <GithubLogo  size={48} weight='bold'/>  
            </a>
            <a href="https://www.linkedin.com/in/lucasrmanhaes/" target="_blank" rel="noopener noreferrer" className="mt-4">
            <LinkedinLogo size={48} weight='bold'/>
            </a>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}