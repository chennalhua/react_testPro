import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill'
const Pet = () => {
    let match = useRouteMatch()
    useEffect(() => {
        // window.onload(){
        //     if (location.href.indexOf('#reloaded') == -1) {
        //         location.href = location.href + "#reloaded";
        //         location.reload();
        //     }
        // }
        // if(match.path !== '/pet'){
        //     localStorage.removeItem('new')
        // }
        // // 点击下一步的时候，调用pushState
        // window.history.pushState({
        //     isRefresh: true,
        // }, '', window.location.href);


        // let aanew = localStorage.getItem('new')
        // console.log(aanew)
        // // 返回当前页面的时候，判断state中的内容，需要的时候强制刷新页面
        // if (window.history.state && window.history.state.isRefresh && aanew === null) {
        //     localStorage.setItem('new', 'no')
        //     window.history.replaceState({
        //         isRefresh: false,
        //     }, '', window.location.href);
        //     window.location.reload();
        // }

    }, [])

    useEffect(() => {
        smoothscroll.polyfill()
    }, []);

    const handleEvent = {
        goAnchor: function (e) {
            e.preventDefault();
            let ele = document.getElementById('test')
            if (ele.scrollHeight > ele.clientHeight) {
                //设置滚动条到最底部
                //ele.scrollTop = ele.scrollHeight
                ele.scrollTo({ top: ele.scrollHeight, behavior: 'smooth' })
            }
        },
        pageScrollIntoView: function (e) {
            e.preventDefault();
            document.getElementById('three').scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
        }
    }
    let disabledStyle = {
        pointerEvents: 'none', //事件觸發 none
        opacity: '0.6'
    }
    return (
        <>
            <div className='bg-third p-2 py-lg-5 px-lg-0'>
                <div className='container'>
                    <ul className='row list-unstyled company justify-content-center'>
                        {/* 新增一個 function 或 data，如果未上架點選以下，反回 return*/}
                        <li className={`col-6 col-lg-2 company-item my-2`} data-open='not'>
                            <a href="#" className='position-relative d-block' style={disabledStyle}>
                                <img src={require(`../../assets/images/logo/insurance-company/明台產物保險.png`).default} className='company-logo img-fluid' alt={`明台產物保險-logo`} />
                                <div className={`position-absolute wait-sale`}>等待上架中...</div>
                            </a>
                        </li>
                        <li className={`col-6 col-lg-2 company-item my-2`} data-open='not'>
                            <a href="#" className='position-relative d-block' style={disabledStyle}>
                                <img src={require(`../../assets/images/logo/insurance-company/中國信託產險.png`).default} className='company-logo img-fluid' alt={`中國信託產險-logo`} />
                                <div className={`position-absolute wait-sale`}>等待上架中...</div>
                            </a>
                        </li>
                        <li className={`col-6 col-lg-2 company-item my-2`} data-open='not'>
                            <a href="#" className='position-relative d-block' style={disabledStyle}>
                                <img src={require(`../../assets/images/logo/insurance-company/富邦產險.png`).default} className='company-logo img-fluid' alt={`富邦產險-logo`} />
                                <div className={`position-absolute wait-sale`}>等待上架中...</div>
                            </a>
                        </li>
                        <li className={`col-6 col-lg-2 company-item my-2`} data-open='not'>
                            <a href="#" className='position-relative d-block' style={disabledStyle}>
                                <img src={require(`../../assets/images/logo/insurance-company/兆豐保險.png`).default} className='company-logo img-fluid' alt={`兆豐保險-logo`} />
                                <div className={`position-absolute wait-sale`}>等待上架中...</div>
                            </a>
                        </li>
                        <li className={`col-6 col-lg-2 company-item my-2`} data-open='not'>
                            <a href="#" className='position-relative d-block' style={disabledStyle}>
                                <img src={require(`../../assets/images/logo/insurance-company/明台產物保險.png`).default} className='company-logo img-fluid' alt={`明台產物保險-logo`} />
                                <div className={`position-absolute wait-sale`}>等待上架中...</div>
                            </a>
                        </li>
                        <li className={`col-6 col-lg-2 company-item my-2`} data-open='not'>
                            <a href="#" className='position-relative d-block' style={disabledStyle}>
                                <img src={require(`../../assets/images/logo/insurance-company/新光產物保險.png`).default} className='company-logo img-fluid' alt={`新光產物保險-logo`} />
                                <div className={`position-absolute wait-sale`}>等待上架中...</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="one" id="one">
                    <h2 className='fw-bolder text-secondary py-3'>one</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati placeat est maxime animi? Ab placeat, fugit consequuntur, libero provident possimus vero molestias repudiandae minus quod ullam iure inventore recusandae!
                        Animi, placeat cum odio a dolorem optio quibusdam ipsa veniam voluptatem eius laboriosam debitis alias ut sit vel deleniti commodi tenetur. Eos repellat accusamus error officiis facilis vel tempora quia.
                        Ea autem quos reprehenderit ad fugit tempore neque vel nesciunt fuga, voluptate ipsa ut at est illo blanditiis corporis saepe! Necessitatibus quo amet laudantium esse asperiores laboriosam porro iusto aspernatur.
                        Expedita illum esse dolore ducimus nesciunt sed illo ad exercitationem rerum accusamus quasi, animi adipisci minus quae eius delectus reprehenderit dicta voluptatibus eligendi ut numquam. Magnam, ipsa quas! Voluptates, at!
                        Quibusdam dolorum beatae tempora ipsa accusantium provident dolores iste quos, cum a autem soluta nobis error. Rem, quasi aut? Dolorum molestiae maxime neque amet modi fuga provident iure quod quia!
                        Iusto ducimus nihil laudantium atque labore possimus magni illo voluptates quasi harum! Deleniti cum repellat molestias in! Nam itaque voluptatem nihil recusandae magni. Nesciunt, temporibus consequuntur? Soluta sit neque corrupti.
                        Maiores autem iste culpa soluta repellat. Quos, non in? Autem cum quae dolorem, sit doloremque maiores mollitia? Facere sapiente error, delectus ut alias quibusdam labore perspiciatis, officiis, corrupti rem repellendus.
                        Eos alias minima odit est illo harum fugit consequatur. Veritatis nesciunt facere impedit laborum, repellendus dolorem asperiores ipsa porro unde id dolore distinctio quia modi hic dignissimos excepturi velit. Esse.
                        Nobis dignissimos cumque, ullam at ad dicta incidunt culpa tenetur, voluptatum libero repellendus! Soluta perspiciatis optio cupiditate quam, consequatur est aspernatur hic, quasi fugit dolorum veniam, accusamus animi tempore provident.
                        Nisi sunt nihil ducimus perferendis nam fuga repellendus officia temporibus illum molestias nulla, hic magnam ex aliquid, esse facilis voluptatum adipisci velit. Sint, eum magnam ipsum deleniti amet voluptatem sed.</p>
                    <button className='btn btn-danger' onClick={handleEvent.pageScrollIntoView}>test page</button>
                </div>
                <div className="two" id="two">
                    <h2 className='fw-bolder text-secondary py-3'>two</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati placeat est maxime animi? Ab placeat, fugit consequuntur, libero provident possimus vero molestias repudiandae minus quod ullam iure inventore recusandae!
                        Animi, placeat cum odio a dolorem optio quibusdam ipsa veniam voluptatem eius laboriosam debitis alias ut sit vel deleniti commodi tenetur. Eos repellat accusamus error officiis facilis vel tempora quia.
                        Ea autem quos reprehenderit ad fugit tempore neque vel nesciunt fuga, voluptate ipsa ut at est illo blanditiis corporis saepe! Necessitatibus quo amet laudantium esse asperiores laboriosam porro iusto aspernatur.
                        Expedita illum esse dolore ducimus nesciunt sed illo ad exercitationem rerum accusamus quasi, animi adipisci minus quae eius delectus reprehenderit dicta voluptatibus eligendi ut numquam. Magnam, ipsa quas! Voluptates, at!
                        Quibusdam dolorum beatae tempora ipsa accusantium provident dolores iste quos, cum a autem soluta nobis error. Rem, quasi aut? Dolorum molestiae maxime neque amet modi fuga provident iure quod quia!
                        Iusto ducimus nihil laudantium atque labore possimus magni illo voluptates quasi harum! Deleniti cum repellat molestias in! Nam itaque voluptatem nihil recusandae magni. Nesciunt, temporibus consequuntur? Soluta sit neque corrupti.
                        Maiores autem iste culpa soluta repellat. Quos, non in? Autem cum quae dolorem, sit doloremque maiores mollitia? Facere sapiente error, delectus ut alias quibusdam labore perspiciatis, officiis, corrupti rem repellendus.
                        Eos alias minima odit est illo harum fugit consequatur. Veritatis nesciunt facere impedit laborum, repellendus dolorem asperiores ipsa porro unde id dolore distinctio quia modi hic dignissimos excepturi velit. Esse.
                        Nobis dignissimos cumque, ullam at ad dicta incidunt culpa tenetur, voluptatum libero repellendus! Soluta perspiciatis optio cupiditate quam, consequatur est aspernatur hic, quasi fugit dolorum veniam, accusamus animi tempore provident.
                        Nisi sunt nihil ducimus perferendis nam fuga repellendus officia temporibus illum molestias nulla, hic magnam ex aliquid, esse facilis voluptatum adipisci velit. Sint, eum magnam ipsum deleniti amet voluptatem sed.</p>
                    <a href='#/test' className='btn btn-danger'>test page</a>
                </div>
                <div className="three" id="three">
                    <h2 className='fw-bolder text-secondary py-3'>three</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati placeat est maxime animi? Ab placeat, fugit consequuntur, libero provident possimus vero molestias repudiandae minus quod ullam iure inventore recusandae!
                        Animi, placeat cum odio a dolorem optio quibusdam ipsa veniam voluptatem eius laboriosam debitis alias ut sit vel deleniti commodi tenetur. Eos repellat accusamus error officiis facilis vel tempora quia.
                        Ea autem quos reprehenderit ad fugit tempore neque vel nesciunt fuga, voluptate ipsa ut at est illo blanditiis corporis saepe! Necessitatibus quo amet laudantium esse asperiores laboriosam porro iusto aspernatur.
                        Expedita illum esse dolore ducimus nesciunt sed illo ad exercitationem rerum accusamus quasi, animi adipisci minus quae eius delectus reprehenderit dicta voluptatibus eligendi ut numquam. Magnam, ipsa quas! Voluptates, at!
                        Quibusdam dolorum beatae tempora ipsa accusantium provident dolores iste quos, cum a autem soluta nobis error. Rem, quasi aut? Dolorum molestiae maxime neque amet modi fuga provident iure quod quia!
                        Iusto ducimus nihil laudantium atque labore possimus magni illo voluptates quasi harum! Deleniti cum repellat molestias in! Nam itaque voluptatem nihil recusandae magni. Nesciunt, temporibus consequuntur? Soluta sit neque corrupti.
                        Maiores autem iste culpa soluta repellat. Quos, non in? Autem cum quae dolorem, sit doloremque maiores mollitia? Facere sapiente error, delectus ut alias quibusdam labore perspiciatis, officiis, corrupti rem repellendus.
                        Eos alias minima odit est illo harum fugit consequatur. Veritatis nesciunt facere impedit laborum, repellendus dolorem asperiores ipsa porro unde id dolore distinctio quia modi hic dignissimos excepturi velit. Esse.
                        Nobis dignissimos cumque, ullam at ad dicta incidunt culpa tenetur, voluptatum libero repellendus! Soluta perspiciatis optio cupiditate quam, consequatur est aspernatur hic, quasi fugit dolorum veniam, accusamus animi tempore provident.
                        Nisi sunt nihil ducimus perferendis nam fuga repellendus officia temporibus illum molestias nulla, hic magnam ex aliquid, esse facilis voluptatum adipisci velit. Sint, eum magnam ipsum deleniti amet voluptatem sed.</p>
                    <a href='#/test' className='btn btn-danger'>test page</a>
                </div>
                <div className='mt-3 mb-5'>
                    <div className='d-flex justify-content-around declare'>
                        <button className={`w-100 declare-step m-2`} value='網路投保聲明事項' onClick={handleEvent.changeDeclare}>網路投保聲明事項</button>
                        <button className={`w-100 declare-step m-2`} value='個資法告知事項' onClick={handleEvent.changeDeclare}>個資法告知事項</button>
                    </div>
                    <div className='position-relative'>
                        <div className={`declare-scroll p-3 bg-light`} onScroll={handleEvent.scrollDone} data-scrollname='網路投保聲明事項' id='test'>
                            <div>
                                認知與接受<br />
                                <h5 className='text-secondary'>第一條</h5>
                                <p>公勝保險經紀人股份有限公司（以下稱本公司）係依據本約定書條款提供本網站，會員服務（以下簡稱本服務）。當會員使用本服務時，除代表已完全瞭解及接受本約定書之所有約定外，並同意本公司對會員的個人資料，有依「個人資料保護法」之相關規定，為蒐集、處理或國際傳遞、利用等之權利。</p>
                                <h5 className='text-secondary'>第二條</h5>
                                <p>本公司有權於任何時間修改或變更本約定書之內容，建議會員隨時注意該等修改或變更。會員於本約定書有任何修改或變更後繼續使用本網站，視為會員已閱讀、瞭解並同意接受該等修改或變更。如果會員不同意本約定書的內容，或者會員所屬的國家或地域排除本約定書內容之全部或一部時，會員應立即停止使用本網站。會員須年滿二十足歲且具有行為能力，並經閱讀、瞭解並同意本約定書之內容及其後之修改變更後，方得使用本網站。</p>
                                服務範圍
                                <h5 className='text-secondary'>第三條</h5>
                                <p>本服務均為免費提供，本公司得隨時增加、取消或修改本服務內容之全部或一部分。</p>
                                登錄義務
                                <h5 className='text-secondary'>第四條</h5>
                                <p>為得以使用本服務，會員同意：</p>
                                <ul className='list-unstyled'>
                                    <li>● 依服務登錄表提供正確、最新及完整的資料。</li>
                                    <li>● 提供的資料如有錯誤或不實，本公司得暫停或終止會員身分。</li>
                                </ul>
                                顧客資料保密措施
                                <h5 className='text-secondary'>第五條</h5>
                                <p>會員所登錄之資料，受「個人資料保護法」及本公司「顧客資料保密措施」之保護。</p>
                                會員帳號、密碼與安全
                                <h5 className='text-secondary'>第六條</h5>
                                <p>會員應妥善保管帳號及密碼，並於每次使用後確實登出，以防他人盜用。會員發現或懷疑自己的會員身分證字號或密碼遭他人盜用時，應該立即通知本公司採取必要的處置。但該通知不得解釋為本公司對會員負有任何賠償或補償之責任或義務。</p>
                                使用者的守法義務及承諾
                                <h5 className='text-secondary'>第七條</h5>
                                <p>會員承諾絕不為任何非法目的或以任何非法方式使用公勝保經企業網站，並承諾遵守中華民國相關法規及一切使用網際網路之國際慣例。會員若係中華民國以外之使用者，並同意遵守所屬國家或地域之法令。會員同意並保證不得利用本服務從事侵害他人權益或違法之行為，包括但不限於：</p>
                                <ul className='list-unstyled'>
                                    <li>● 公布或傳送任何誹謗、侮辱、具威脅性、攻擊性、不雅、猥褻、不實、違反公共秩序或善良風俗或其他不法之文字、圖片或任何形式的檔案於公勝保經企業網站上。</li>
                                    <li>● 違反依法律或契約所應負之保密義務。</li>
                                    <li>● 冒用他人名義使用本服務。</li>
                                    <li>● 傳輸或散佈電腦病毒。</li>
                                    <li>● 其他本網站有正當理由認為不適當之行為。</li>
                                </ul>
                                資訊或建議
                                <h5 className='text-secondary'>第八條</h5>
                                <p>會員由本網站或本網站連結之其他網站下載取得之軟體或資料，本公司對該軟體或資料不負擔保或保證之責。</p>
                                廣告行為
                                <h5 className='text-secondary'>第九條</h5>
                                <p>本網站上所有廣告，均由各該廣告商、產品與服務的供應商所設計與提出，會員對於廣告內容之正確性與可信度應自行判斷，本公司僅提供網站供刊登或鏈結，對該廣告不負擔保責任。</p>
                                買賣或其他交易行為
                                <h5 className='text-secondary'>第十條</h5>
                                <p>會員經由本網站連結之其他網站與廠商進行商品買賣、服務或其他交易者，其因此所生之法律關係僅存在於會員與廠商之間，與本公司無涉。</p>
                                智慧財產權
                                <h5 className='text-secondary'>第十一條</h5>
                                <p>本公司所使用之軟體、程式及網站上所有內容，包括但不限於著作、圖片、檔案、資訊、資料、網站架構、網站畫面的安排、網頁設計，均由本公司或其他權利人依法擁有其智慧財產權，包括但不限於商標權、專利權、著作權、營業秘密與專有技術等。任何人不得逕自使用、修改、重製、公開播送、改作、散佈、發行、公開發表或進行還原工程、解編或反向組譯。若會員欲引用或轉載前述軟體、程式或網站內容，必須依法取得本公司或其他權利人的事前書面同意。如有違反，會員應對本公司負損害賠償責任（包括但不限於訴訟費用及律師費用等）。</p>
                                個人資料保護
                                <h5 className='text-secondary'>第十二條</h5>
                                <p>本公司為提供會員更好的客戶服務而蒐集、處理或利用會員於本網站中留存之個人資料，本公司皆會以尊重會員的權益為基礎，於會員同意期間內，以誠實信用之方法處理或利用會員所提供的資料 。本公司只會蒐集與上述目的相關且有需要的個人資料，會員的個人資料原則上僅會在法令許可的範圍之下，以電子檔或紙本形式，於我國境內提供本公司及本公司委外廠商之處理及利用。本公司訂有個人資料管理政策，並有完善之個人資料保護安全維護計畫，任何流程皆有嚴格之控管程序及標準作業流程，會員所提供的一切資料均會予以嚴加保密。基於個人資料保護法之規定，會員可以撥打本公司免費客戶服務專線（0800-0077-090），針對會員的個人資料請求本公司答覆查詢、提供閱覽、製給複製本、更正、補充、停止蒐集、處理、利用或刪除。會員亦可至本公司官方網站之個人資料保護專區進一步瞭解相關權益。</p>
                                免責聲明
                                <h5 className='text-secondary'>第十三條</h5>
                                <p>本網站除本公司所提供之服務、資訊且無第十四條第四款之情事者外，就下列事項不負保證之責：</p>
                                <ul className='list-unstyled'>
                                    <li>● 本服務符合會員的需求。</li>
                                    <li>● 本服務之及時提供、安全性、可靠性、正確性、完整性或不受干擾。</li>
                                </ul>
                                服務暫停或中止
                                <h5 className='text-secondary'>第十四條</h5>
                                <p>有下列情事之一者，本公司得暫停、變更、中斷或終止本服務之全部或一部，對於會員因此所致之損害，本公司不負任何賠償或補償責任：</p>
                                <ul className='list-unstyled'>
                                    <li>● 本公司對本服務相關軟硬體設備進行搬遷、更換、升級、保養或維修者。</li>
                                    <li>● 會員有任何違反政府法令或本約定書條款者。</li>
                                    <li>● 天災或其他不可抗力。</li>
                                    <li>● 非本公司所得控制之事由致本服務資訊顯示不正確、遭偽造、竄改、刪除或擷取或致系統中斷或不能正常運作時。</li>
                                    <li> ● 其他不可歸責於本公司之事由。</li>
                                </ul>
                                會員身份終止
                                <h5 className='text-secondary'>第十五條</h5>
                                <p>會員違反本約定書條款，或將其專屬權益讓與他人者，本公司得不經催告終止其會員資格，並追究相關之法律責任。會員得隨時以書面或電子信箱通知本公司終止其會員資格。</p>
                                條款之效力、準據法與管轄法院
                                <h5 className='text-secondary' >第十六條</h5>
                                <p>本約定書任一條款無效者，不影響其他條款之效力。會員與本公司之權利義務，依網路規範及中華民國法律定之；因本約定書所生事項涉訟時，以臺灣高雄地方法院為第一審管轄法院。</p>
                                <span id="bottom"></span>
                            </div>
                            <a href='#' className='scrolldown-button btn btn-danger' data-name='網路投保申明事項' onClick={handleEvent.goAnchor}>▼</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-secondary rounded-pill position-fixed' style={{ width: '40px', height: '40px', bottom: '20px', right: '20px' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>▲</button>
        </>
    )
}
export default Pet