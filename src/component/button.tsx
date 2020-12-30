import React from "react";
import style from '../styles/componentModule/button.module.scss';
interface IProps { }
interface IState { }
export class Button extends React.Component<IProps, IState>{
    render() {
        return (
            <>
                <div className={style.main}>
                    <ul>
                        <li>
                            <div className={style.circle}>
                                <i className={`fa fa-twitter ${ style.icon }`} ></i>
                            </div>
                        </li>
                    </ul>
                </div>

            </>
        )
    }
}