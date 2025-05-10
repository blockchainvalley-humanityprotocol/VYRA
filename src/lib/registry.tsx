'use client';
import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
    ServerStyleSheet,
    StyleSheetManager,
} from 'styled-components';

export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    // 서버 측에서 한 번만 스타일을 렌더링하도록 합니다
    const [styledComponentsStyleSheet] = useState(
        () => new ServerStyleSheet()
    );

    useServerInsertedHTML(() => {
        const styles =
            styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined')
        return <>{children}</>;

    return (
        <StyleSheetManager
            sheet={styledComponentsStyleSheet.instance}
        >
            {children}
        </StyleSheetManager>
    );
}
