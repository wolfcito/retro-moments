# IDEA:

Queremos recrear la experiencia de la fotografía analógica y potenciarla con la ayuda de blockchain. Creemos que las fotos que tomamos con el celular hoy en día tienen el problema de que, al ser tantas, cada imagen pierde su valor individual. No hay una conexión emocional fuerte con cada foto, como sucede con las fotos analógicas, donde cada toma es considerada y apreciada. Queremos ayudar a eliminar esta sobreabundancia de imágenes y devolver el valor y la significancia a cada fotografía que captures.

Además, la implementación de rollos en blockchain no solo facilita una estructura segura y que auténtica tus fotos, sino que también permite la creación de torneos de fotografía. Estos torneos ofrecen la oportunidad de ganar premios y mejorar tus habilidades fotográficas al competir en desafíos únicos. Con esta combinación de tecnología y tradición, aspiramos a crear una experiencia fotográfica que celebre la autenticidad y la creatividad en cada disparo.

## Tracks:

Aplicamos al track General y a Begginers Bounty

## La Propuesta de Nuestro Producto

### Valor y Significado de Cada Foto:

- **Limitación Intencional**: Al igual que en la fotografía analógica, nuestro producto te permitirá tomar un número limitado de fotos en cada "rollo digital", fomentando la consideración y planificación para cada disparo. Esto te ayudará a enfocarte en capturar momentos realmente significativos y valiosos.

### Autenticidad y Realismo:

- **Sin Edición Extensiva**: Nuestras herramientas limitarán la edición digital, promoviendo la autenticidad de cada imagen capturada. Queremos que tus fotos reflejen la realidad de manera fiel, manteniendo la honestidad y la naturalidad de cada momento.

### Experiencia y Emoción:

- **Proceso de Revelado**: Implementaremos un proceso de "revelado digital" que simula la espera y la emoción de ver tus fotos por primera vez. Esta espera añadirá un elemento de sorpresa y anticipación, enriqueciendo la experiencia fotográfica.

### Ganancias y Comunidad:

- **Participación y Competencia**: Ofreceremos torneos fotográficos donde los usuarios pueden comprar un rollo digital específico para participar. Estos torneos tendrán temas y desafíos únicos, fomentando la creatividad y la competencia amistosa entre los participantes. Los ganadores de los torneos recibirán premios exclusivos y reconocimientos dentro de la comunidad, elevando el prestigio y el valor de sus fotografías.

### Autenticidad y Propiedad con Blockchain:

- **Propiedad Digital Segura**: Utilizando la tecnología blockchain, cada foto que tomes será registrada de manera única y segura. Esto asegurará la propiedad y autenticidad de tus imágenes, permitiendo que cada foto tenga un historial inmutable y verificable.

### Mercado de NFT:

- **Galerías y Comercio**: Las fotos que decidas mintear como NFT pueden ser añadidas a tus galerías personales, mostrando tu trabajo de manera única y segura. Además, puedes comerciarlas en el mercado de NFTs, permitiendo que otros coleccionistas y entusiastas adquieran tus imágenes verificadas y autenticadas.
- **Valor y Exclusividad**: Al mintear tus fotos como NFTs, no solo estás asegurando su autenticidad y propiedad, sino que también estás agregando valor y exclusividad a tu trabajo, permitiendo que tus imágenes se aprecien como obras de arte digitales únicas con todo el proceso desde la toma al revelado realizado en blockchain.

## Cómo lo Haremos:

1. **Los usuarios se registran en el sistema utilizando su wallet**. Desde allí, tienen la posibilidad de comprar un rollo, que puede ser de 12 o 24 fotos, o un rollo de torneo. Una vez adquirido, el rollo se carga en la cuenta del usuario. Cada vez que el usuario toma una foto, se genera un hash y se sube a la blockchain, decrementando en uno la cantidad de fotos restantes en el rollo. Cuando se termina un rollo, se puede revelar, llevando al usuario a un menú donde puede mintear las fotos que más le gustaron. Estas fotos minteadas se pueden visualizar en sus galerías personales. Además, si el usuario posee un rollo de torneo, puede verificar el estado del torneo y reclamar sus recompensas directamente desde la plataforma.

### Compra de Rollo:

- **Generación de Rollo**: Mediante un SC generamos un NFT el cual contiene un hash (rollohash) por cada posible foto.

### Sacar Foto:

- **Hashing y Almacenamiento**: Cuando se toma una foto, se hace un hashing con clave o keccak256 utilizando uno de los rollohash generados y se guarda la foto en un storage y el nuevo hash (fotohash) en una db. Todo este proceso es offchain.

### Revelar Rollo (Minteo):

- **Proceso de Revelado**: Cuando completamos el rollo lo podemos revelar, esto hace que por primera vez tengamos acceso a las fotos que tomamos. Estas fotos las vamos a ver como si fueran un negativo, y elegiremos las que nos gusten para poder mintearlas.
- **Minteo**: Cuando minteamos la foto, se generará un NFT de la misma y se subirá la foto a IPFS.
- **Verificación**: Para chequear la autenticidad de la foto, el SC de minteo hará un reverse del keccak256 y obtendrá el (hashfoto) mediante el (rollohash). Esto se comprobará con lo subido a IFPS.

### Participar en Torneo:

- **Torneos Especiales**: Los torneos son colecciones de rollos especiales, estos rollos son generados por el organizador del mismo, teniendo un valor determinado de entrada. Todos los que tengan los rollos de la colección podrán participar del evento con ese rollo.
- **Reglas y Filtros**: Los torneos pueden ser variados y con sus propias reglas, pueden aplicar filtros especiales a ese evento, temáticas, etc.

### Claim de Rewards:

- **Recompensas**: Los que participan en torneos y ganan pueden claimear las rewards del mismo. Se pueden claimear rewards de la comunidad.

## Modelo de Negocio:

### Torneos Fotográficos:

- **Participación y Competencia**: Organizaremos torneos fotográficos donde los usuarios podrán comprar rollos específicos para participar. Cada torneo tendrá un tema o desafío único, fomentando la creatividad y la competencia entre los participantes.
- **Premios y Reconocimientos**: Los ganadores de los torneos recibirán premios exclusivos, reconocimientos dentro de la comunidad.
- **Modelo de Ingresos**: Un porcentaje de la venta de cada rollo de torneo será destinado a la aplicación, generando ingresos recurrentes y sostenibles.

### Venta de Rollos con Experiencias Únicas:

- **Rollos Especializados**: Ofreceremos rollos digitales con características especiales, como filtros exclusivos, temáticas específicas (naturaleza, retratos, eventos), y funcionalidades limitadas que promuevan la creatividad y la consideración en cada disparo.
- **Rollos para Eventos**: Rollos dedicados a eventos especiales, como festivales, conciertos y bodas, que permitirán a los usuarios capturar momentos importantes con un toque distintivo. Estos rollos pueden incluir accesos exclusivos a funcionalidades adicionales y filtros temáticos.

### Minteo de Fotos:

- **Costos de Minteo**: Cuando queremos revelar nuestro rollo y se realiza el Minteo de alguna foto, se cobra un pequeño costo.

### Alianzas con Sponsors:

- **Colaboraciones Estratégicas**: Estableceremos alianzas con empresas de fotografía, marcas de cámaras y sitios especializados en fotografía. Estas colaboraciones ayudarán a impulsar el proyecto, ofreciendo beneficios adicionales a nuestros usuarios y aumentando la visibilidad de nuestra plataforma.
- **Patrocinios y Promociones**: Los sponsors podrán patrocinar eventos, torneos y rollos especiales, proporcionando recursos y premios adicionales para nuestros usuarios.

### Revelado de Fotos:

- **Servicios de Impresión**: La compra de rollos podrá incluir un servicio de revelado de un número determinado de fotos, similar al servicio de kiosco de impresión. Los usuarios podrán elegir imprimir sus fotos y recogerlas en ubicaciones convenientes.
- **Envío a Domicilio**: Ofreceremos la opción de enviar las fotos reveladas directamente a domicilio, proporcionando comodidad y satisfacción adicional a nuestros usuarios.
