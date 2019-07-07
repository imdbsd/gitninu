import React from 'react'

function FacebookLoading(props) {
    return (
        <svg
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className="lds-facebook"
            style={{ background: "none" }}
        >
            <rect
                ng-attr-x="{{config.x1}}"
                ng-attr-y="{{config.y}}"
                ng-attr-width="{{config.width}}"
                ng-attr-height="{{config.height}}"
                ng-attr-fill="{{config.c1}}"
                x="17.5"
                y={30}
                width={15}
                height={40}
                fill="#1d3f72"
            >
                <animate
                attributeName="y"
                calcMode="spline"
                values="18;30;30"
                keyTimes="0;0.5;1"
                dur={1}
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.2s"
                repeatCount="indefinite"
                />
                <animate
                attributeName="height"
                calcMode="spline"
                values="64;40;40"
                keyTimes="0;0.5;1"
                dur={1}
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.2s"
                repeatCount="indefinite"
                />
            </rect>
            <rect
                ng-attr-x="{{config.x2}}"
                ng-attr-y="{{config.y}}"
                ng-attr-width="{{config.width}}"
                ng-attr-height="{{config.height}}"
                ng-attr-fill="{{config.c2}}"
                x="42.5"
                y={30}
                width={15}
                height={40}
                fill="#5699d2"
            >
                <animate
                attributeName="y"
                calcMode="spline"
                values="20.999999999999996;30;30"
                keyTimes="0;0.5;1"
                dur={1}
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.1s"
                repeatCount="indefinite"
                />
                <animate
                attributeName="height"
                calcMode="spline"
                values="58.00000000000001;40;40"
                keyTimes="0;0.5;1"
                dur={1}
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.1s"
                repeatCount="indefinite"
                />
            </rect>
            <rect
                ng-attr-x="{{config.x3}}"
                ng-attr-y="{{config.y}}"
                ng-attr-width="{{config.width}}"
                ng-attr-height="{{config.height}}"
                ng-attr-fill="{{config.c3}}"
                x="67.5"
                y={30}
                width={15}
                height={40}
                fill="#d8ebf9"
            >
                <animate
                attributeName="y"
                calcMode="spline"
                values="24;30;30"
                keyTimes="0;0.5;1"
                dur={1}
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="0s"
                repeatCount="indefinite"
                />
                <animate
                attributeName="height"
                calcMode="spline"
                values="52;40;40"
                keyTimes="0;0.5;1"
                dur={1}
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="0s"
                repeatCount="indefinite"
                />
            </rect>
            </svg>

    )
}

export default FacebookLoading