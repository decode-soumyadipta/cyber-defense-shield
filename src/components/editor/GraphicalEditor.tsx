
import { useState, useRef, useEffect } from 'react';
import { Move, Maximize2, RotateCw, Trash } from 'lucide-react';

interface EditorState {
  selectedElement: HTMLElement | null;
  isDragging: boolean;
  initialX: number;
  initialY: number;
}

export default function GraphicalEditor() {
  const [editorState, setEditorState] = useState<EditorState>({
    selectedElement: null,
    isDragging: false,
    initialX: 0,
    initialY: 0,
  });

  const makeElementEditable = (element: HTMLElement) => {
    element.style.position = 'relative';
    element.style.cursor = 'move';
    element.style.outline = '2px dashed #00E5FF';
  };

  const removeEditable = (element: HTMLElement) => {
    element.style.position = '';
    element.style.cursor = '';
    element.style.outline = '';
  };

  const handleElementClick = (e: MouseEvent) => {
    if (editorState.selectedElement) {
      removeEditable(editorState.selectedElement);
    }

    const target = e.target as HTMLElement;
    if (target.classList.contains('editable')) {
      makeElementEditable(target);
      setEditorState(prev => ({ ...prev, selectedElement: target }));
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!editorState.isDragging || !editorState.selectedElement) return;

    const dx = e.clientX - editorState.initialX;
    const dy = e.clientY - editorState.initialY;

    editorState.selectedElement.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseUp = () => {
    setEditorState(prev => ({ ...prev, isDragging: false }));
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (!editorState.selectedElement) return;

    setEditorState(prev => ({
      ...prev,
      isDragging: true,
      initialX: e.clientX,
      initialY: e.clientY,
    }));
  };

  useEffect(() => {
    document.addEventListener('click', handleElementClick);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('click', handleElementClick);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [editorState.selectedElement, editorState.isDragging]);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-shield-dark border border-shield-gray rounded-lg p-2 shadow-lg">
      <div className="flex gap-2">
        <button
          className="p-2 hover:bg-shield-gray rounded-md text-shield-cyan"
          onClick={() => setEditorState(prev => ({ ...prev, isDragging: true }))}
        >
          <Move className="w-5 h-5" />
        </button>
        <button
          className="p-2 hover:bg-shield-gray rounded-md text-shield-cyan"
          onClick={() => {
            if (editorState.selectedElement) {
              editorState.selectedElement.style.transform = 'scale(1.1)';
            }
          }}
        >
          <Maximize2 className="w-5 h-5" />
        </button>
        <button
          className="p-2 hover:bg-shield-gray rounded-md text-shield-cyan"
          onClick={() => {
            if (editorState.selectedElement) {
              const currentRotation = editorState.selectedElement.style.rotate || '0deg';
              const newRotation = parseInt(currentRotation) + 45;
              editorState.selectedElement.style.rotate = `${newRotation}deg`;
            }
          }}
        >
          <RotateCw className="w-5 h-5" />
        </button>
        <button
          className="p-2 hover:bg-shield-gray rounded-md text-shield-red"
          onClick={() => {
            if (editorState.selectedElement) {
              removeEditable(editorState.selectedElement);
              setEditorState(prev => ({ ...prev, selectedElement: null }));
            }
          }}
        >
          <Trash className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
