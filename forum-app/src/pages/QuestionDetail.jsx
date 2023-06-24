import LeftSidebar from '../components/LeftSidebar';
import Details from '../components/Details';
import { forumData } from '../data/data';

export default function QuestionDetail({ question }) {
	console.log('Question details of', question);

	return (
		<div className="home-container">
			<LeftSidebar />
			<div>
				{forumData.posts.map(item => (
					<Details question={item} />
				))}
			</div>
		</div>
	);
}
