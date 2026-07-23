import { Lightbulb, Target, Leaf } from "lucide-react";

export default function Story() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            La Historia de Tikua
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Cómo nació la idea de hacer la hidratación irresistible
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto">
          {/* Initial Idea */}
          <div className="mb-12 p-8 rounded-xl bg-white border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  El Comienzo
                </h3>
                <p className="text-foreground/70">
                  La idea de Tikua nació de una inquietud del equipo fundador. Al inicio, se pensó en 
                  desarrollar una botella de agua inteligente que midiera el consumo de hidratación de 
                  las personas. Sin embargo, al investigar el mercado, el equipo descubrió que la 
                  verdadera barrera para una buena hidratación no era la falta de datos, sino la falta 
                  de opciones ricas y saludables.
                </p>
              </div>
            </div>
          </div>

          {/* The Problem */}
          <div className="mb-12 p-8 rounded-xl bg-white border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  El Problema
                </h3>
                <p className="text-foreground/70">
                  Muchas personas no toman suficiente agua porque no tiene ningún sabor, y las 
                  alternativas saborizadas del mercado están cargadas de edulcorantes artificiales. 
                  De esa reflexión surgió la pregunta que dio origen al producto: 
                  <span className="font-display font-bold text-primary"> ¿y si en lugar de medir la 
                  hidratación, la hacemos irresistible?</span>
                </p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12 p-8 rounded-xl bg-white border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Nace Tikua
                </h3>
                <p className="text-foreground/70">
                  Así nació Tikua, un agua que hidrata de forma funcional gracias a sus electrolitos 
                  naturales, con el sabor de frutas que solo se encuentran en Costa Rica y que ninguna 
                  marca comercial ha llevado al mercado masivo: el <span className="font-semibold">cas</span>, 
                  la <span className="font-semibold">guanábana</span> y la <span className="font-semibold">carambola</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <p className="text-2xl md:text-3xl font-display font-bold text-primary">
              "Hidratación con sabor a Costa Rica"
            </p>
            <p className="text-foreground/60 mt-2">
              El eslogan que resume nuestra propuesta: beneficio funcional con el sabor de la tierra costarricense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
