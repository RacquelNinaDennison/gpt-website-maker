import "@/styles/globals.css";
import "@/styles/main.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";

export default function App({
	Component,
	pageProps,
}: AppProps) {
	return <Component {...pageProps} />;
}
