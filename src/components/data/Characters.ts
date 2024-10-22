import Norman from '../../img/norman.jpg';
import Jora from '../../img/jora.jpg';
import Kea from '../../img/kea.jpg';
import Nicole from '../../img/nicole.jpg'; 
import Rammus from '../../img/rammus.jpg';

export const charactersData = [
    {
        id: "jora-white",
        name: "Jora White",
        description: "Jora es un mecánico perteneciente a la luna satélite de Saturno, llamada Titán.",
        imageUrl: Jora,
        race: "Humano",
        fullDescription: `Pasa sus días en su taller arreglando viejas naves u objetos que encuentre por el amplio y caluroso yermo. 
            Es una persona solitaria y antipática pero de buen corazón. Lo único que llegó a amar fue a su mujer Elena y a su hija Laurina, 
            que murieron en manos del primer oficial Norman Keys, perteneciente al imperio de la Guardia Roja en donde Jora trabajó tiempo atrás y mantiene un profundo odio, 
            el cual lo lleva a unir fuerza con Kea Ströll y Nicole Smirnova para embarcarse en una gran aventura en busca de justicia y redención. 
            Durante su viaje vuelve a confiar en las personas y sentir lo que es una familia nuevamente, recobrando el sentido de lucha y pertenencia. 
            Jora se convierte en una figura paternal muy importante en el grupo, donde muchas veces ejerce el papel de líder y guía al equipo`,
        characteristics: [
            "Intuición aguda",
            "Escepticismo racional",
            "Determinación inquebrantable",
            "Pasado misterioso"
        ]
    },
    {
        id: "kea-stroll",
        name: "Kea Ströll",
        description: "Kea es un ladrón de segunda, hijo de una ama de casa y un padre que lo abandonó de pequeño.",
        imageUrl: Kea,
        race: "Humano",
        fullDescription: `Pese a ser alguien bastante astuto, es una persona rota que refleja su dolor interno a través del humor, 
        y al ser joven e inexperto, piensa que nada le puede salir mal y que la suerte está siempre a su favor. 
        A pesar de su carisma y arrogancia, no tiene suerte con las mujeres pero siempre busca insistentemente  conquistar alguna dama. 
        Por cosas del destino (y su arrogancia), es capturado por La Guardia Roja y llevado a una prisión de alta seguridad, pero su estadía es corta ya que se escapa en una cápsula defectuosa. 
        Kea se estrella en una luna satélite de Saturno y ahí  conoce al mecánico Jora White. 
        Al principio tuvieron una áspera primera impresión pero logran mitigar sus diferencias y unir fuerzas para aventurarse en la búsqueda del artefacto que les falta para poder controlar los diversos saltos espaciales. 
        Durante su viaje comienza a tomarle cariño a Jora y ve en él una figura paterna en la cual apoyarse emocionalmente, y junto a Nicole Smirnova, aprende a tratar mejor a las mujeres y respetarlas. 
        Gracias a su carisma e inocencia, Kea se convierte en un consuelo cómico para el grupo y atenúa la cruda y triste realidad de tener que combatir a la Guardia Roja, aunque a veces eso resulte un problema para el equipo.`,
        characteristics: [
            "Curiosidad insaciable",
            "Valentía inquebrantable",
            "Ingenio agudo",
            "Coraje inigualable"
        ]
    },
    {
        id: "nicole-smirnova",
        name: "Nicole Smirnova",
        description: "Nació en un planeta congelado, tuvo que sobrevivir en temperaturas extremas y a bandidos que saqueaban la zona.",
        imageUrl: Nicole,
        race: "Humana",
        fullDescription: `Nicole nació en un planeta congelado, desde pequeña tuvo que aprender a sobrevivir en temperaturas 
        extremas que muchas veces bajaban a los -70 grados y a los bandidos que constantemente saqueaban la zona, culpables del brutal asesinato de su padre y su madre.
        Nicole escapa de su planeta y forma un grupo revolucionista para justiciar en planetas opresores. 
        Tras varios años de guerra enfrentándose a la Guardia Roja, ella es la única sobreviviente y se ve obligada a  refugiarse en un planeta de mala muerte, volviéndose una persona fría, desconfiada y desesperanzada.  
        Se une a Jora, Rammus y Kea como compañera de lucha, y a medida que avanza la aventura, profundiza más su relación con ellos y se hacen íntimos amigos. 
        Nicole se convierte en un pilar fundamental dentro del equipo para resolver problemas y fortalecer aún más la unión y la fuerza, aportando madurez e inteligencia.`,
        characteristics: [
            "Comunicación con espíritus",
            "Visiones del futuro",
            "Empatía sobrenatural",
            "Conexión con el más allá"
        ]
    },
    {
        id: "norman-keys",
        name: "Norman Keys",
        description: "Uno de los líderes de la Guardia Roja, controlan los recursos y a los seres que habitan en los planetas.",
        imageUrl: Norman,
        race: "Humano",
        fullDescription: `Norman Keys es uno de los líderes de la Guardia Roja, un imperio colonizador que bajo su dictadura gobierna una gran cantidad de planetas, controlando sus recursos y a los seres que habitan en ellos. Norman es una persona autoritaria y sumamente disciplinado, poco empático y perteneciente a un linaje de dictadores y poderosos. Norman es totalmente fiel a la Guardia Roja y a sus creencias, haciendo todo lo necesario por el bien del imperio. Norman vive bajo la sombra de su padre, al cual siempre intenta impresionar, y a pesar de su carácter duro, es simplemente un niño con ganas de que su papá lo reconozca.
        El antagonista no tiene idea de quiénes son los protagonistas, solo sabe que un prisionero  se fugó y se robó un artefacto sumamente importante. A medida que avanza la historia, se convierte en el principal enemigo de la trama y del grupo de protagonistas. Norman intenta hacerles la vida imposible y obstaculizar el cumplimiento de la misión, para que así la Guardia Roja siga gobernando los planetas y nada la despoje de su poder.`,
        characteristics: [
            "Ambición desmedida",
            "Secretos oscuros",
            "Respetabilidad superficial",
            "Decisiones cuestionables"
        ]
    },
    {
        id: "rammu",
        name: "R.A.M.M.U",
        description: "Un pequeño robot creado y distribuido por la antigua compañía argentina, “Mercado Libre”.",
        imageUrl: Rammus,
        race: "Robot",
        fullDescription: `R.A.M.M.U, por sus sílabas “Robot Argentino Multifunción Mecánico Universal”, es un pequeño robot creado y distribuido por la antigua compañía argentina, “Mercado Libre”.
        Fue lanzado en el año 2022 por el aniversario N°40 de la famosa banda de los 80’s, Soda Stereo, el cual incorpora sus canciones más exitosas. 
        Fue hallado en muy mal estado y reparado por Jora White en la luna Titán, sin saber cómo terminó ahí. 
        Su comunicación es limitada y solo puede “hablar” mediante sonidos predefinidos y algunas palabras básicas. 
        Jora se queda con él y se convierte en su mejor amigo, acompañándolo y ayudándolo en su solitaria vida.`,
        characteristics: [
            "Sabiduría ancestral",
            "Conocimientos mágicos",
            "Guía espiritual",
            "Objetos mágicos",
        ]
    }
];