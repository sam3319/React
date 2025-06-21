import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';


const EditorCommon = () => {
	return (
		<Editor
			initialValue="텍스트를 입력해주세요."
			previewStyle="vertical"
			height="600px"
			initialEditType="wysiwyg"
			useCommandShortcut={false}
			hideModeSwitch={true}
		/>
	);
};

export default EditorCommon;