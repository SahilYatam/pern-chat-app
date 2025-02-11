import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "./Conversation";
const Conversations = () => {
	const {loading, conversation} = useGetConversation();
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversation.map((conversation) => (
				<Conversation key={conversation.id} conversation={conversation} emoji={getRandomEmoji()} />
			))}
			{loading ? <span className="loading loading-spinner mx-auto" /> : null}
		</div>
	);
};
export default Conversations;