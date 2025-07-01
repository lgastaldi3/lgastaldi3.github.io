const AboutClientSingle = ({ title, image }) => {
	return (
		<div className="w-1/2 flex items-center justify-center" style={{height: '10rem'}}>
			<img
				src={image}
				className="h-full w-auto object-contain rounded-lg px-10 pb-8 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm cursor-pointer"
				alt={title}
			/>
		</div>
	);
};

export default AboutClientSingle;
