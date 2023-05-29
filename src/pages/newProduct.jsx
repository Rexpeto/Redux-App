import FormProduct from "../components/FormProduct";

const NewProduct = () => {
    return (
        <div className="w-full">
            <h1 className="text-white text-2xl font-bold mb-8">
                Agregar nuevo producto
            </h1>
            <FormProduct />
        </div>
    );
};

export default NewProduct;
