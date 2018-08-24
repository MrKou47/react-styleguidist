import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import Heading from 'rsg-components/Heading';
// Import default implementation from react-styleguidist using the full path
import DefaultSections from 'react-styleguidist/lib/rsg-components/Sections/SectionsRenderer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
	theme: 'pangu',
}

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer);

const styles = ({ fontFamily, color, space }) => ({
	headingSpacer: {
		marginBottom: space[2],
	},
	descriptionText: {
		marginTop: space[0],
		fontFamily: fontFamily.base,
	},
});

export function SectionsRenderer({ classes, children }) {
	return (
		<Provider store={store}>
				<DefaultSections>
					{123123}
					{children}
				</DefaultSections>
		</Provider>
	);
}

SectionsRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
};

export default Styled(styles)(SectionsRenderer);
