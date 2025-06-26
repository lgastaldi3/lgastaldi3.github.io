import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0 flex items-center justify-center bg-black w-full mx-auto" style={{height: '20rem', maxWidth: '36rem'}} key={project.id}>
						<img
							src={project.img}
							className="block max-w-full max-h-full object-contain rounded-2xl shadow-lg sm:shadow-none"
							alt={project.title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
