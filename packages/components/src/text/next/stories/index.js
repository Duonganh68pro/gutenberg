/**
 * Internal dependencies
 */
import Text from '../text';
import { adapter } from '../index';

export default {
	component: Text,
	title: 'Components/G2/Text',
};

export const _default = () => {
	return <Text>Hello</Text>;
};

export const truncate = () => {
	return (
		<Text numberOfLines={ 2 } truncate>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
			facilisis dictum tortor, eu tincidunt justo scelerisque tincidunt.
			Duis semper dui id augue malesuada, ut feugiat nisi aliquam.
			Vestibulum venenatis diam sem, finibus dictum massa semper in. Nulla
			facilisi. Nunc vulputate faucibus diam, in lobortis arcu ornare vel.
			In dignissim nunc sed facilisis finibus. Etiam imperdiet mattis
			arcu, sed rutrum sapien blandit gravida. Aenean sollicitudin neque
			eget enim blandit, sit amet rutrum leo vehicula. Nunc malesuada
			ultricies eros ut faucibus. Aliquam erat volutpat. Nulla nec feugiat
			risus. Vivamus iaculis dui aliquet ante ultricies feugiat.
			Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
			posuere cubilia curae; Vivamus nec pretium velit, sit amet
			consectetur ante. Praesent porttitor ex eget fermentum mattis.
		</Text>
	);
};

export const highlight = () => {
	return (
		<Text highlightWords={ [ 'con' ] }>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
			facilisis dictum tortor, eu tincidunt justo scelerisque tincidunt.
			Duis semper dui id augue malesuada, ut feugiat nisi aliquam.
			Vestibulum venenatis diam sem, finibus dictum massa semper in. Nulla
			facilisi. Nunc vulputate faucibus diam, in lobortis arcu ornare vel.
			In dignissim nunc sed facilisis finibus. Etiam imperdiet mattis
			arcu, sed rutrum sapien blandit gravida. Aenean sollicitudin neque
			eget enim blandit, sit amet rutrum leo vehicula. Nunc malesuada
			ultricies eros ut faucibus. Aliquam erat volutpat. Nulla nec feugiat
			risus. Vivamus iaculis dui aliquet ante ultricies feugiat.
			Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
			posuere cubilia curae; Vivamus nec pretium velit, sit amet
			consectetur ante. Praesent porttitor ex eget fermentum mattis.
		</Text>
	);
};

const Adapted = ( props ) => <Text { ...adapter( props ) } />;

export const adapted = () => (
	<>
		<Adapted variant="title.large" as="h1">
			Title Large
		</Adapted>
		<Adapted variant="title.medium" as="h2">
			Title Medium
		</Adapted>
		<Adapted variant="title.small" as="h3">
			Title Small
		</Adapted>
		<Adapted variant="subtitle">Subtitle</Adapted>
		<Adapted variant="subtitle.small">Subtitle Small</Adapted>
		<Adapted variant="body">Body</Adapted>
		<Adapted variant="body.small">Body Small</Adapted>
		<Adapted variant="button">Button</Adapted>
		<Adapted variant="caption">Caption</Adapted>
		<Adapted variant="label">Label</Adapted>
	</>
);
