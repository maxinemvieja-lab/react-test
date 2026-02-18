import { Accordion } from "radix-ui"
import { CardImage } from "./card"
import { AccordionBasic } from "./accordion"

export default function Page() {
return <>
   
    <div class = "mt-15 flex flex-col items-center gap-10">

    <CardImage/> 
    <AccordionBasic/>
    
    </div>
</>
}

