import { RefObject, useCallback, useEffect, useState } from "react";
import React from "react";

interface UseDragProps {
  ref: RefObject<HTMLDivElement> | null;
  calculateFor?: string;
}

export const useDrag = ({
  ref,
  calculateFor = "topLeft",
}: UseDragProps) => {
  const [dragInfo, setDragInfo] = useState<{
    startX: number;
    startY: number;
    top: number;
    left: number;
    width: number;
    height: number;
  }>({
    startX: 0,
    startY: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const root = document.getRootNode() as HTMLElement;
  const [finalPosition, setFinalPosition] = useState<{ x: number; y: number }>({
    x: root.clientWidth / 2,
    y: root.clientHeight / 2,
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const updateFinalPosition = useCallback(
    (width: number, height: number, x: number, y: number) => {
      if (calculateFor === "bottomRight") {
        setFinalPosition({
          x: Math.max(
            Math.min(
              window.innerWidth - width,
              window.innerWidth - (x + width)
            ),
            0
          ),
          y: Math.max(
            Math.min(
              window.innerHeight - height,
              window.innerHeight - (y + height)
            ),
            0
          ),
        });

        return;
      }
      setFinalPosition({
        x: Math.min(Math.max(0, x), window.innerWidth - width),
        y: Math.min(Math.max(0, y), window.innerHeight - height),
      });
    },
    [calculateFor]
  );

  const handleMouseUp = (evt: Event) => {
    evt.preventDefault();
    setIsDragging(false);
  };

  const handleTouchEnd = (evt: React.TouchEvent) => {
    evt.stopPropagation();
    setIsDragging(false);
  };

  const _handleDragStart = (
    clientX: number,
    clientY: number,
    ref: RefObject<HTMLElement> | null
  ) => {
    const { current: draggableElement } = ref || {};

    if (!draggableElement) return;

    const { top, left, width, height } =
      draggableElement.getBoundingClientRect();

    setIsDragging(true);
    setDragInfo({
      startX: clientX,
      startY: clientY,
      top,
      left,
      width,
      height,
    });
  };

  const handleTouchStart = (evt: React.TouchEvent<HTMLDivElement>) => {
    evt.stopPropagation();
    const { clientX, clientY } = evt.touches?.[0] || {};
    _handleDragStart(clientX, clientY, ref);
  };

  const handleMouseDown = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    const { clientX, clientY } = evt;
    _handleDragStart(clientX, clientY, ref);
  };

  const handleMouseMove = useCallback(
    (evt: Event) => {
      const { current: draggableElement } = ref || {};
      if (!draggableElement) return;

      let clientX, clientY;
      if (window.TouchEvent && evt instanceof TouchEvent) {
        evt.stopPropagation();
        [clientX, clientY] = [
          evt.touches?.[0].clientX,
          evt.touches?.[0].clientY,
        ];
      } else if (evt instanceof MouseEvent) {
        evt.preventDefault();
        [clientX, clientY] = [
          evt.clientX,
          evt.clientY,
        ];
      } else {
        throw new Error("Unexpected type of event in useDrag::handleMouseDown");
      }

      if (isDragging) {
        const position = {
          x: dragInfo.startX - clientX,
          y: dragInfo.startY - clientY,
        };

        const { top, left, width, height } = dragInfo;

        updateFinalPosition(width, height, left - position.x, top - position.y);
      }
  
    },
    [isDragging, dragInfo, ref, updateFinalPosition]
  );

  const recalculate = (width: number, height: number) => {
    const { current: draggableElement } = ref || {};
    if (!draggableElement) return;

    const {
      top,
      left,
      width: boundingWidth,
      height: boundingHeight,
    } = draggableElement.getBoundingClientRect();

    updateFinalPosition(
      width ?? boundingWidth,
      height ?? boundingHeight,
      left,
      top
    );
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove]);

  return {
    position: finalPosition,
    size: { width: dragInfo.width, height: dragInfo.height },
    handleMouseDown,
    handleTouchStart,
    handleTouchEnd,
    recalculate,
  };
};
