import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import SearchInput from "../components/SearchInput";
import CountriesTable from "../components/CountriesTable";
import { useState } from "react";

export default function Home({ countries }) {
  //console.log(countries)

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.input_container}>
        <div className={styles.count}>Found {countries.length} countries</div>
        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by Name, Region or Sub-region"
            onChange={onInputChange}
          />
        </div>
      </div>

      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};
