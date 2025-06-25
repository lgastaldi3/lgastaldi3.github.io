import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, projectSlug = 'solv' }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson[projectSlug] || singleProjectDataJson['solv']
	);

	const setCurrentProject = (slug) => {
		setSingleProjectData(singleProjectDataJson[slug] || singleProjectDataJson['solv']);
	};

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, setCurrentProject }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
