import { csv } from 'd3';
import PropsTypes from 'prop-types';

import BarChart from 'components/BarChart/BarChart';
import Layout from 'components/Layout/Layout';

function MostPopulatedCountries({ data }) {
  return (
    <Layout
      headTitle="Bar Chart | Data Visualization"
      title="Top 20 Countries by Population 2020"
      subTitle="The Most Populated Countries in the World 2020"
      chartType="Bar Chart"
      dataSource="Population by Country 2020"
      dataSourceUrl="https://www.kaggle.com/tanuprabhu/population-by-country-2020">
      <BarChart data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await csv(
    'https://gist.githubusercontent.com/patelnidhi2198/645bda82637484a43ca952b6ec4e3b4f/raw/b6bf1bf61ade06e1f50b037397f14ac1b32446aa/countries.txt'
  );

  data.forEach(d => (d.population = +d.population));

  return {
    props: {
      data,
    },
  };
}

MostPopulatedCountries.propTypes = {
  data: PropsTypes.array,
};

export default MostPopulatedCountries;
