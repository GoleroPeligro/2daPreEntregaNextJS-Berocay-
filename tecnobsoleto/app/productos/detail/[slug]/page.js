
import Image from "next/image"
import QtySelector from "@/components/products/QtySelector"
import Counter from "@/components/ui/Counter"
import Boton from "@/components/ui/Boton"
import BtnVolver from "@/components/ui/BtnVolver"





const Detail = async ({ params }) => {
    const {slug} = params
    const item = await fetch(`http://localhost:3000/api/product/${slug}`,
    {
        cache: 'no-store'
    }).then(r => r.json())

  
    return (
        <article className=" container m-auto mt-8 mb-2 w-3/4 bg-win-gray-light border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray p-1 ">
            <div className="text-white bg-win-blue">
                <p className="ml-2 p-1"> {item.title} </p>
            </div>
            <div className="md:flex justify-center min-w-80 border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray mt-2 text-center">
                <section className=" flex bg-white items-center border-r-white:border-b-white border-t-win-btn-border-gray border-l-win-btn-border-gray ">
                    <Image
                        alt={item.title}
                        src={`/img/products/${item.image}`}
                        width={400}
                        height={400}
                        className="object-fill"
                    />

                </section>


                <section className="flex-initial md:w-96 max-w-80 px-4 border-t border-gray-200 pb-4 sm:text-left">
                    <h4 className="text-sm my-4 font-semibold">{item.title}</h4>
                    <p className="text-sm my-2 text-win-gray-dark">{item.description}</p>

                    <p className="text-2xl font-semibold my-3">U$S {item.price}</p>
                    <QtySelector item={item}/>
                    {/* <section className="flex md:justify-start justify-center items-center gap-2 my-3">
                        <Counter stock={item.inStock} />
                        <p className="text-xs text-win-gray-dark">Stock: {item.inStock}</p>
                    </section>

                    <div className='flex md:justify-start justify-center py-2 gap-2'>

                        <Boton>Agregar al carrito</Boton>
                        <BtnVolver />

                    </div> */}
                </section>
            </div>

        </article>
    )
}

export default Detail