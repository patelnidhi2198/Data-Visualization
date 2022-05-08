import { csv } from 'd3';
import PropsTypes from 'prop-types';

import Layout from 'components/Layout/Layout';
import ScatterPlot from 'components/ScatterPlot/ScatterPlot';

function LiteracyRatesByContry({ data }) {
  return (
    <Layout
      headTitle="Scatter Plot | Data Visualization"
      title="Literacy Rates By Country 2015"
      subTitle="The younger vs The older generation"
      chartType="Scatter Plot"
      dataSource="Our World in Data"
      dataSourceUrl="https://ourworldindata.org/literacy">
      <ScatterPlot data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await csv(
    'https://gist.githubusercontent.com/patelnidhi2198/80708a3c0df0c7da94fbd31cd2424876/raw/1e8476f4678ebf93148df30edbd31e813ca49c34/Literacy-rates.csv'
    );

  data.forEach(d => {
    d.youthRate = +d.youthRate;
    d.elderlyRate = +d.elderlyRate;
  });

  return {
    props: {
      data,
    },
  };
}

LiteracyRatesByContry.propTypes = {
  data: PropsTypes.array,
};

export default LiteracyRatesByContry;
