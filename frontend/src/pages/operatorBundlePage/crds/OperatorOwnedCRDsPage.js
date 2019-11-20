import * as React from 'react';
import PropTypes from 'prop-types';

import { ExternalLink } from '../../../components/ExternalLink';
import OperatorCRDsPage from './OperatorCRDsPage';
import { sectionsFields } from '../../../utils/constants';

const OperatorOwnedCRDsPage = ({ operator, history }) => {
  const description = (
    <span>
      It&apos;s common for your Operator to use multiple CRDs to link together concepts, such as top-level database
      configuration in one object and a representation of replica sets in another. List out each one in the CSV file.
      Checkout more in <ExternalLink href="#" text="Owned CRDs" indicator />.
    </span>
  );
  const crdsField = sectionsFields['owned-crds'];

  return (
    <OperatorCRDsPage
      operator={operator}
      crdsField={crdsField}
      crdsTitle="Owned CRDs"
      crdsDescription={description}
      objectPage="owned-crds"
      objectType="Owned CRD"
      removeAlmExamples
      history={history}
    />
  );
};

OperatorOwnedCRDsPage.propTypes = {
  operator: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

OperatorOwnedCRDsPage.defaultProps = {
  operator: {}
};

export default OperatorOwnedCRDsPage;
