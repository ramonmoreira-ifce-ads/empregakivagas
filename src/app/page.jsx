import PublicarVagaForm from "@/components/vagas/PublicarVagaForm";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <PublicarVagaForm />
      <Footer />
    </div>
  );
}
