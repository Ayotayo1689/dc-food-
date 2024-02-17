import React, {useState} from 'react'
import Hero from "@/components/scheduleErrand/Hero";
import WhatMakesUsDifferent from "@/components/scheduleErrand/WhatMakesUsDifferent";
import Advantages from "@/components/scheduleErrand/Advantages";
import {Box} from "@chakra-ui/react";
import DelegateAnErrand from "@/components/scheduleErrand/DelegateAnErrand";
import ProductsWeDeliver from "@/components/scheduleErrand/ProductsWeDeliver";
import FAQ from "@/components/scheduleErrand/FAQ";
import WhatMakesUsDifferentMobile from "@/components/scheduleErrand/WhatMakesUsDifferentMobile";

function ScheduleErrand() {
    const id = "deligateErrand"
    return (
        <Box>
            <Hero id={id}/>
            <WhatMakesUsDifferent/>
            <WhatMakesUsDifferentMobile/>
            <Advantages/>
            <DelegateAnErrand id={id}/>
            <ProductsWeDeliver/>
            <FAQ/>
        </Box>
    )
}

export default ScheduleErrand