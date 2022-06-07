import { ReactNode } from "react";
import { globalStyles } from "styles/globals";
import {
  blobs,
  button,
  container,
} from "styles/components/layout/main-layout/MainLayoutStyles";
import NavBar from "components/nav-bar/Navbar";
import { BlobLeft, BlobRight } from "components/icons/main-layout/blobs";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Head from "next/head";
import { useRouter } from "next/router";
import { capitalizePathname } from "helpers/StringHelpers";
import { animations } from "styles/animations";
import { utilityClasses } from "styles/utilityClasses";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();
  console.log("Re render MainLayout");

  const headTitle: string = capitalizePathname(router?.pathname);
  return (
    <>
      <Head>
        <title>👨🏽‍💻Daniel Cruz - {headTitle}</title>
      </Head>
      <div className="blob-bubble-left">
        <BlobLeft className="float" />
      </div>
      <div className="blob-bubble-right">
        <BlobRight className="float" />
      </div>
      <LanguageSwitcher />
      <main>
        {children}
        <NavBar />
      </main>
      <style jsx>{globalStyles}</style>
      <style jsx>{animations}</style>
      <style jsx>{utilityClasses}</style>
      <style jsx>{container}</style>
      <style jsx>{button}</style>
      <style jsx>{blobs}</style>
    </>
  );
}
