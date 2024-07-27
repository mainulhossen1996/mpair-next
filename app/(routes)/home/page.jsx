'use client'
import { HomeArticle } from "@/components/home-article";
import { Homeb2b } from "@/components/home-b2b";
import { HomeExpert } from "@/components/home-expert";
import { HomeHero } from "@/components/home-hero";
import { HomeHow } from "@/components/home-how";
import { HomeProduct } from "@/components/home-product";
import { HomeService } from "@/components/home-service";
import Pair from "@/components/pair";
import React from "react";


export default function Home() {
  return (
    <>
  <HomeHero/>
  <Pair/>
  <HomeProduct/>
  <HomeHow />
  <HomeExpert/>
  <HomeService/>
  <Homeb2b/>
  <HomeArticle/>
    </>
  );
}