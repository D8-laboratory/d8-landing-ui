import Image from "next/image";
import { TranslatedText } from "../../components/client/TranslatedText";
import  Enterprise from "../../../public/img/enterprise.png"
import  Enterprise2 from "../../../public/img/enterprise2.png"
export const ProductPage=()=> {
  return (
    <div className="min-h-screen">
      {/* Sección 1: Descripción del Producto */}
      <section className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Descripción - Izquierda */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
              <TranslatedText i18nKey="products.title" />
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              <TranslatedText i18nKey="products.description" />
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <TranslatedText i18nKey="products.description2" />
            </p>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
              <TranslatedText i18nKey="products.demo" />
            </button>
          </div>

          {/* Imagen - Derecha */}
          <div className="relative">
            <Image
              src={Enterprise}
              alt="Automatización con IA"
              width="1200"
              height="1200"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Título de Beneficios */}
      <section className="container mx-auto px-8 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
          <TranslatedText i18nKey="products.benefits" />
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
      </section>

      {/* Sección 2: Lista de Beneficios */}
      <section className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen - Izquierda */}
          <div className="relative">
            <Image
              src={Enterprise2}
              alt="Beneficios de automatización"
              width="1200"
              height="1200"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          {/* Lista de Beneficios - Derecha */}
            <div className="space-y-6">
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <TranslatedText i18nKey="products.point1" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <TranslatedText i18nKey="products.point1description" />
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <TranslatedText i18nKey="products.point2" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <TranslatedText i18nKey="products.point2description" />
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <TranslatedText i18nKey="products.point3" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <TranslatedText i18nKey="products.point3description" />
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                   <TranslatedText i18nKey="products.point4" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <TranslatedText i18nKey="products.point4description" />
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
export default ProductPage;