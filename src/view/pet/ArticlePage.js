import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FacebookShareButton, LineShareButton } from 'react-share'; //社群分享按鈕
const ArticlePage = () => {
    let match = useRouteMatch();
    let pageId = match.params.id
    if (pageId === 'article2') { //暫時沒有 id2 的文章，如 params 為 id2 則導回文章導覽頁
        window.location.href = '/aboutPet'
    }
    // https://chennalhua.github.io/react_testPro/#/pet
    let shareUrl = `https://chennalhua.github.io/react_testPro/#/aboutPet/${pageId}` //社群分享連結組串
    let [articleId8AreaOption, setArticleId8AreaOption] = useState('雲嘉南高屏及東部地區')
    const handleGotoPage = (e) => { //立即投保 button
        window.location.href = '/#calPetAge'
    }
    return (
        <>
            { //1. 寵物保險保什麼？為何需要寵物險？
                pageId === 'article1' ?
                    <>
                        <Helmet>
                            <title>寵物保險保什麼？為何需要寵物險？|GOGO保-寵物險網投專屬平台</title>
                            <meta property="og:image" content="/react_testPro/寵物險NO.1_S.jpg" />
                            <meta property='og:url' content='https://chennalhua.github.io/react_testPro/#/aboutPet/article1' />
                        </Helmet>
                        <div className='article'>
                            <img src={require('./article/寵物險NO.1_L.jpg').default} className='img-fluid d-none d-md-block' alt='寵物保險保什麼？為何需要寵物險？' />
                            <img src={require('./article/寵物險NO.1_S.jpg').default} className='img-fluid d-block d-md-none ' alt='寵物保險保什麼？為何需要寵物險？' />
                            <div className='overflow-hidden'>
                                <div className='container py-4'>
                                    <div className='row'>
                                        <div className='col-12 py-3'>
                                            <article className='article-content'>
                                                <h1 className='article-title'>寵物保險保什麼？為何需要寵物險？</h1>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物保險是什麼？</h2>
                                                    <p>簡單說，由於寵物沒健保，如果受傷或是生重病，醫療費往往令主人吃不消，但又不能不花，因而就有了「寵物保險」的誕生。</p>
                                                    <p>寵物保險主要是給付「寵物生病或發生意外產生的必要開銷」，通常以「寵物醫療費用」為主要保障內容，<strong>以功能來講，可以想成是「寵物健保 + 其它綜合保障」，性質上屬於財產保險，一年一約，最多可續保到寵物十幾歲。</strong>目前寵物險在台灣，只有貓狗能投保，所以也算是狗狗和貓咪們專屬的保險。</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>常見寵物險保障內容有哪些？有推薦必保的項目嗎？</h2>
                                                    <p>寵物險最重要的便是前面提過的醫療費用，另外市面上還有許多常見保障，理賠方式大多為「額度有上限的實支實付」，也就是用收據來請領。以下將一些常見保障附上簡短說明，讓大家知道大概還有什麼好處和功能。</p>
                                                    <ul className='list-unstyled'>
                                                        <li>
                                                            <h3 className='article-title--third'>(一)寵物醫療</h3>
                                                            <p>當寵物因傷病就醫時，針對實際支出寵物險最重要的便是前面提過的醫療費用，另外市面上還有許多常見保障，理賠方式大多為「額度有上限的實支實付」，也就是用收據來請領的醫療花費給予理賠，不包含交通或看護費，通常可再分割成以下三部分。（早期亦有只針對意外而無疾病保障的寵物險，挑選時須留意）</p>
                                                            <ol className='text-danger fw-bolder'>
                                                                <li>門診費</li>
                                                                <li>住院費</li>
                                                                <li>手術費</li>
                                                            </ol>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third'>(二)寵物侵權 / 過失責任</h3>
                                                            <p>當寵物造成他人財產損失或受傷，對方依法求償時，由保險公司代為賠償的保障，建議額度挑選100萬以上的較安心。</p>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third'>(三)協尋廣告費用</h3>
                                                            <p>當寵物於保險期間內遺失時，給予廣告印刷或協尋支出用的彌補，通常保險期間內限定申請一次。</p>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third'>(四)寄宿日額費用</h3>
                                                            <p>主人不幸於保險期間住院而無法照顧寵物時，給予寵物「寄宿」用的支出補償，依天數理賠，有每日額度上限和天數限制。</p>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third'>(五)喪葬費用</h3>
                                                            <p>保險期間寵物不幸過世時，在限制額度內，給予實際喪葬支出的補償。</p>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third'>(六)重新取得費用</h3>
                                                            <p>承上，寵物過世後，主人欲取得新寵物，需認養或購買而產生相關花費，如植入晶片、體檢、登記、診療、結紮、除蟲、預防性注射等，在限額內皆給予補償。</p>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third'>(七)照護費用</h3>
                                                            <p>保險期間寵物因傷病須住進具備動物照護機構資格的醫院，以便照護時，給予補償用的金額。</p>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third'>(八)旅遊行程取消費用</h3>
                                                            <p>當主人在國外或準備出國時，寵物須緊急手術或不幸因傷病死亡，導致許多行程無法退款，由保險公司補償這部分的損失。</p>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third'>(九)癌症病理檢驗費用</h3>
                                                            <p>寵物罹癌時，針對檢驗給予一筆癌症病理檢驗費，少數商品才有，可能採額外附加保費的方式。</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物險保障項目多寡非絕對，理賠仍有條款細節要注意！</h2>
                                                    <p>儘管寵物險保障項目越來越多元，但不是每家都一樣，挑選時務必看清楚，才不會以為有買到什麼項目但實際上卻沒有。另外上述保障許多都帶有<strong>「自負額」</strong>的規定，意即理賠時自己也必須出一小部分，其餘的才是由保險公司支出。自負額的設計是為了防止道德風險，不讓惡意人士為賺取理賠金而蓄意傷害寵物，並非保險公司刻意刁難。若介意這點也可以選購無自付額的寵物險，只是通常整體保費會略貴一些。</p>
                                                    <p>此外，醫療理賠在保險期間也常有限定次數，門診、住院、手術能理賠的次數都不同，至於額度上限，有的會分開計算；有的則合併在一起共用額度。如果毛孩首次就診後，數天內再度看診在條款上算同一事故的話，便要注意單一事故有無限定理賠上限；如果不是這樣計算的話，也要注意保險期間內最多可理賠的「總次數」。還有少數保單，會註明「每件單一事故僅理賠一次」，這些也都要事先瞭解再衡量利弊。</p>
                                                    <p>假如真不清楚細節，也歡迎大家在投保前先詢問我們，提出需求讓GOGO保給予解答，也是個維護自己和毛孩權益的好方法！</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>為何寵物險都建議盡量要投保？</h2>
                                                    <p>所謂<strong>先保大再保小</strong>，越是自己無法承受的局面，一定要優先轉嫁給保險。以風險能否承受的幅度來看，寵物險的<strong>「醫療保障」與闖禍引起的「侵權 / 過失責任」算是比較重要</strong>，有時會影響整個家庭生計，這也是寵物險的價值所在。至於「協尋費用」這類保障，本身有限額且數目不大，真發生的話，自掏腰包也不致有什麼問題，當次要考量即可。</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>什麼樣的人適合幫寵物投保？</h2>
                                                    <p>毛孩就像人一樣，總有生病的時候，尤其中年時狀況便逐漸明顯，有的品種又更頻繁。能狗補償許多醫療開銷的寵物險，實在是<strong>每位細心、有責任的主人</strong>都該準備的。加上現代人常常帶毛孩在外活動、出遊，難免發生意外受傷，或是闖禍造成別人無法估計的損失，有一份牢靠的保障還是比較安心。早點準備，讓我們的家人真正無憂無慮地享受生活吧！</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div className='col-12'>
                                            <div className='article-footer text-center py-4'>
                                                <span>分享：</span>
                                                <FacebookShareButton url={shareUrl} hashtag='#寵物保險'><button className='btn facebook--icon-before'></button></FacebookShareButton>
                                                <LineShareButton url={shareUrl} title='寵物保險保什麼？為何需要寵物險？'><button className='btn line--icon-before'></button></LineShareButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
            { //3. 哪些寵物能保寵物險？有年齡或別的條件限制嗎？
                pageId === 'article3' ?
                    <>
                        <Helmet>
                            <title>哪些寵物能保寵物險？有年齡或別的條件限制嗎？|GOGO保-寵物險網投專屬平台</title>
                            <meta property="og:image" content="/react_testPro/寵物險NO.1_S.jpg" />
                            <meta property='og:url' content='https://chennalhua.github.io/react_testPro/#/aboutPet/article3' />
                        </Helmet>
                        <div className='article'>
                            <img src={require('./article/寵物險NO.3_L.jpg').default} className='img-fluid d-none d-md-block' alt='哪些寵物能保寵物險？有年齡或別的條件限制嗎？' />
                            <img src={require('./article/寵物險NO.3_S.jpg').default} className='img-fluid d-block d-md-none ' alt='哪些寵物能保寵物險？有年齡或別的條件限制嗎？' />
                            <div className='overflow-hidden'>
                                <div className='container py-4'>
                                    <div className='row'>
                                        <div className='col-12 py-3'>
                                            <article className='article-content'>
                                                <h1 className='article-title'>哪些寵物能保寵物險？有年齡或別的條件限制嗎？</h1>
                                                <div className='article-paragraph'>
                                                    <p>近年因少子化趨勢，養寵物的家庭逐漸興盛，根據「寵物登記管理資訊網」統計，全台貓狗新增認養登記數量，光是今年前九個月就高達16萬隻，遠超過新生兒出生登記數的11萬。由此可見，對於寵物認養、把寵物當家中小孩來看待等觀念，在台灣早已稀鬆平常。</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物保險為何？這四件事決定你的寵物能否投保！</h2>
                                                    <p>寵物險屬於產險的一種，是產險公司近幾年主要業務之一。就像人看病有健保，寵物的醫療花費相當大，往往讓飼主吃不消，所以也發展出相對應的商業保險。<strong>目前在國內，僅開放「貓」與「狗」投保寵物險，其它動物暫時無法保。</strong>每家寵物險投保規則不太一樣，但通常都會有年齡限制，常見的最小投保年齡為「8週」，最大則不一定，超過「8歲」可能就有許多保單無法投保。但也有一些少數商品可以接受更大年齡的毛孩。若寵物本身健康狀況不佳、身體有殘缺，或是還有疾病正在治療，也有可能被拒保。</p>
                                                    <p>貓咪投保時，比較不會因品種而有所差別，但如果是狗狗，就要看品種。由於寵物險不僅提供醫療補助，也常帶有「侵權 / 過失責任」的保障，因而有些較具攻擊性的犬種會被列入拒保，常見拒保犬種請參看附表一。另外像是專門繁殖、狩獵、醫學用的貓狗，或是供出租、販售、從事競賽、特技表演，以及一些工作犬等，也都不在承保範圍。綜合上述，投保寵物險時，會有的限制條件如附表二。</p>
                                                    <div className='row justify-content-center'>
                                                        <div className='col-12 col-lg-5'>
                                                            <p className='bg-secondary text-light px-2 text-center'>附表1：寵物險常見拒保犬種</p>
                                                            <span className='d-block'>比特犬（含史塔佛夏牛頭犬）（Pit Bull Terrier）</span>
                                                            <span className='d-block'>日本土佐犬（Japanese Tosa）</span>
                                                            <span className='d-block'>紐波利頓犬（Neapolitan Mastiff）</span>
                                                            <span className='d-block'>阿根廷杜告犬（DogoArgentino）</span>
                                                            <span className='d-block'>巴西菲勒犬（Fila Braziliero）</span>
                                                            <span className='d-block'>獒犬（Mastiff）</span>
                                                        </div>
                                                        <div className='col-12 col-lg-5'>
                                                            <p className='bg-secondary text-light px-2 text-center'>附表2：寵物險常見投保限制因素</p>
                                                            <span className='d-block'>一、年齡</span>
                                                            <span className='d-block'>二、疾病、身體缺陷等健康狀況</span>
                                                            <span className='d-block'>三、品種</span>
                                                            <span className='d-block'>四、平常用途與定位</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>如何挑選寵物保險？推薦你這樣考量！</h2>
                                                    <p>市面上的寵物險相當多，挑選時，如沒什麼特殊需求，建議以自家毛孩特質來考量。針對特質選擇必備的保障，才能真正解決擔心的事，簡單整理三種毛孩特質類型如下：</p>
                                                    <div className='table-responsive-xl'>
                                                        <table className='table'>
                                                            <thead>
                                                                <tr className='bg-third text-dark'>
                                                                    <th>寵物特質</th>
                                                                    <th>選擇的寵物險保單特點</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>體質較虛弱、易罹患某些疾病</td>
                                                                    <td><strong>醫療給付</strong>為<strong>實支實付</strong>型、每次就診都能計算理賠，不以事件來限定就診理賠次數</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>好動、愛冒險、時常出去玩</td>
                                                                    <td><strong>意外事故</strong>的理賠額度充足</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>神經質、不易受控、攻擊性略強</td>
                                                                    <td><strong>寵物侵權 / 過失責任</strong>這方面的理賠額度足夠</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物投保前須先準備這幾件物品！</h2>
                                                    <p>寵物險的投保必備文件，常見有下列幾項：</p>
                                                    <div className='col-12 col-lg-5'>
                                                        <p className='bg-secondary text-light px-2 text-center'>寵物險常見投保必備文件</p>
                                                        <span className='d-block'>一、晶片序號</span>
                                                        <span className='d-block'>二、體檢證明</span>
                                                        <span className='d-block'>三、注射疫苗證明</span>
                                                        <small>（上述至少具備一項）</small>
                                                        <hr />
                                                        <span className='d-block'>四、寵物近期全身彩色照片</span>
                                                        <span className='d-block'>五、詳實填寫完的要保書</span>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物險不只保障醫療開銷，這些好處一定要知道！</h2>
                                                    <p>這幾年隨著被認養的毛小孩數量增加，寵物險投保平台也紛紛出現。根據資策會調查，<strong>「醫療開銷」和伙食費，是養寵物最大的兩項支出項目</strong>，所以才越來越多人購買寵物險。</p>
                                                    <p>如今毛孩對國人來說，不只是寵物，更像是重要的家人，因而保障越來越豐富。除了基本的醫療外，還有許多福利喔！像是寵物走失時的<strong>協尋廣告費</strong>、飼主不幸住院寵物必須去<strong>寄宿的花費</strong>、寵物闖禍要<strong>賠償給別人的損失</strong>以及<strong>喪葬費</strong>等等，這些都包含在寵物保險裡，只要挑對商品就能一次擁有上述保障！趕緊利用方便的網路平台幫身旁寶貝們添購完善福利吧！</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div className='col-12'>
                                            <div className='article-footer text-center py-4'>
                                                <span>分享：</span>
                                                <FacebookShareButton url={shareUrl} hashtag='#寵物保險'><button className='btn facebook--icon-before'></button></FacebookShareButton>
                                                <LineShareButton url={shareUrl} title='哪些寵物能保寵物險？有年齡或別的條件限制嗎？'><button className='btn line--icon-before'></button></LineShareButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
            { //4. 寵物寄宿夯！有這保障連主人住院都能賠寄宿費！
                pageId === 'article4' ?
                    <>
                        <Helmet>
                            <title>寵物寄宿夯！有這保障連主人住院都能賠寄宿費！|GOGO保-寵物險網投專屬平台</title>
                            <meta property="og:image" content="/react_testPro/寵物險NO.1_S.jpg" />
                            <meta property='og:url' content='https://chennalhua.github.io/react_testPro/#/aboutPet/article4' />
                        </Helmet>
                        <div className='article'>
                            <img src={require('./article/寵物險NO.4_L.jpg').default} className='img-fluid d-none d-md-block' alt='寵物寄宿夯！有這保障連主人住院都能賠寄宿費！' />
                            <img src={require('./article/寵物險NO.4_S.jpg').default} className='img-fluid d-block d-md-none ' alt='寵物寄宿夯！有這保障連主人住院都能賠寄宿費！' />
                            <div className='overflow-hidden'>
                                <div className='container py-4'>
                                    <div className='row'>
                                        <div className='col-12 py-3'>
                                            <article className='article-content'>
                                                <h1 className='article-title'>寵物寄宿夯！有這保障連主人住院都能賠寄宿費！</h1>
                                                <div className='article-paragraph'>
                                                    <p>小琪一個人從嘉義來到台北租屋工作，平日和愛貓「球球」相互陪伴，一起度過許多在異鄉的時光。不幸某天下班途中發生車禍，小琪必須住院五天，儘管媽媽特地從南部上來照顧自己，但此時小琪最擔心的，其實是家中的毛孩。球球一向待在家由小琪獨自照顧，不太親人，而沒養過貓的媽媽又不瞭解貓咪習性，也不知該如何清理球球的窩，到底該怎麼辦才好？</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物寄宿、寵物住宿是什麼？</h2>
                                                    <p>其實小琪的情況只要找一間有「寵物寄宿」服務的業者就能解決問題。這是目前一個很熱門的行業，讓一些有事情（例如出差、出國、住院等）暫時無法照顧寵物的主人能夠放心的寄放寵物，同時也能供應寵物餐點、幫洗澡、美容、帶出去運動等，並以天數和服務內容來計費。</p>
                                                    <p>但寵物住宿店收費不便宜，以狗來說，通常中、大型犬一個晚上就要千元以上，貓的話則略便宜些。如果像小琪那樣，已經要煩惱自己的住院醫藥費了，還要再幫貓咪付連續住宿的錢，實在吃不消！</p>
                                                    <div className='table-responsive-xl'>
                                                        <table className='table'>
                                                            <thead>
                                                                <tr className='bg-third text-dark'>
                                                                    <th className='text-lg-center' scope='col' colSpan='6'>寵物寄宿業服務內容價格參考</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className='fw-bolder text-secondary'>
                                                                    <td >寵物 \ 項目</td>
                                                                    <td >住宿（單日）</td>
                                                                    <td >洗澡清潔</td>
                                                                    <td >餐費</td>
                                                                    <td >獨立房（另加價）</td>
                                                                    <td >出外運動</td>
                                                                </tr>
                                                                <tr>
                                                                    <td >貓咪</td>
                                                                    <td >300 ~ 600 元</td>
                                                                    <td >300 ~ 500 元</td>
                                                                    <td >50 ~ 200 元</td>
                                                                    <td >800 ~ 1000 元</td>
                                                                    <td >-</td>
                                                                </tr>
                                                                <tr>
                                                                    <td >小型犬</td>
                                                                    <td >400 ~ 800 元</td>
                                                                    <td >300 ~ 500 元</td>
                                                                    <td >50 ~ 200 元</td>
                                                                    <td >300 ~ 600 元</td>
                                                                    <td >100 ~ 150 元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td >中型犬</td>
                                                                    <td >600 ~ 1200 元</td>
                                                                    <td >500 ~ 800 元</td>
                                                                    <td >50 ~ 200 元</td>
                                                                    <td >600 ~ 800 元</td>
                                                                    <td >100 ~ 150 元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td >大型犬</td>
                                                                    <td >800 ~ 1600 元</td>
                                                                    <td >1000 元 以上</td>
                                                                    <td >50 ~ 200 元</td>
                                                                    <td >800 ~ 1000 元</td>
                                                                    <td >100 ~ 150 元</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <small className='d-block text-end'>※圖表為隨機參考多家業者資訊，僅取大略數值供參考。（單位 / 新台幣 元）</small>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物險保障這種狀況！寵物住宿不用愁</h2>
                                                    <p>這幾年許多毛孩主人競相投保的「寵物險」，許多都含有「寵物寄宿日額費用」的細項保障，俗稱「寵物寄宿費用」。保障敘述大致如下：</p>
                                                    <p><strong>「寵物主人因傷病需住院連續數天以上（通常為 3 天，含入院日、出院日），而無法照顧寵物，將寵物寄託於登記合格的獸醫院或合法設立之寵物業。」</strong></p>
                                                    <p>保險公司將針對實際支出的費用，在一定限額內，給予「寵物寄宿日額費用保險金」。<strong>（通常最高以 10 日為限）</strong></p>
                                                    <p>例如小琪如果買了某家寵物險，其寄宿日額限額 1000 元，貓咪共住五天，業者開價一天 900 元，那麼小琪共可獲得 4500 元的補償。但如果寄宿業者每天的價錢為1000元以上，那小琪最多還是只能領取5000 元，因為每天計算的保險金不會超出每天的限額。</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物在外住宿或託人寄宿仍有風險！保障一次湊齊才放心</h2>
                                                    <p>毛孩住在外面時，由於脫離熟悉的主人身邊，情緒上較不穩定。儘管寵物寄宿業者再專業，還是有可能發生<strong>「毀損店家物品、弄傷其它毛孩，趁人不注意逃跑失蹤」</strong>的狀況。在這方面，市面上許多寵物險都有相對應的細項保障，只要幫寶貝選對商品，就可以避免許多煩惱。相比每年才一到三千元的保費，也算是CP值很高又實用的保障了！</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div className='col-12'>
                                            <div className='article-footer text-center py-4'>
                                                <span>分享：</span>
                                                <FacebookShareButton url={shareUrl} hashtag='#寵物住宿'><button className='btn facebook--icon-before'></button></FacebookShareButton>
                                                <LineShareButton url={shareUrl} title='寵物寄宿夯！有這保障連主人住院都能賠寄宿費！'><button className='btn line--icon-before'></button></LineShareButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
            { //5. 寵物醫療費用是錢坑?寵物保險讓你荷包省錢不失血
                pageId === 'article5' ?
                    <>
                        <Helmet>
                            <title>寵物醫療費用是錢坑?寵物保險讓你荷包省錢不失血|GOGO保-寵物險網投專屬平台</title>
                        </Helmet>
                        <div className='article'>
                            <img src={require('./article/寵物險NO.5_L.jpg').default} className='img-fluid d-none d-md-block' alt='寵物醫療費用是錢坑?寵物保險讓你荷包省錢不失血' />
                            <img src={require('./article/寵物險NO.5_S.jpg').default} className='img-fluid d-block d-md-none ' alt='寵物醫療費用是錢坑?寵物保險讓你荷包省錢不失血' />
                            <div className='overflow-hidden'>
                                <div className='container py-4'>
                                    <div className='row'>
                                        <div className='col-12 py-3'>
                                            <article className='article-content'>
                                                <h1 className='article-title'>寵物醫療費用是錢坑?寵物保險讓你荷包省錢不失血</h1>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>再怎麼省也省不了的寵物醫療費</h2>
                                                    <p>養過貓狗的人都知道，要讓寵物過得健康又快樂，一堆開銷都有其必要。除了伙食費外，定期打疫苗、醫療檢測、美容清潔以及生活用品等，都是讓毛小孩能夠身心健康的關鍵。</p>
                                                    <p>貓咪的開銷幅度通常都差不多，差異可能取決於個體健康程度。而養狗的花費除了健康因素外，還要看體型、品種，通常越大的犬種開銷也越大。想省錢的話，伙食可買較便宜的、清潔也能自己DIY，但隨著寵物年齡增長，醫療費便會直線攀升。也因此，只要是一路陪伴貓狗到老年的飼主，絕對會跟你說：<strong>「醫療費，最坑！」</strong></p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle text-lg-center'>貓狗寵物各類花費參考表</h2>
                                                    <div className='table-responsive-xl col-lg-8 mx-auto'>
                                                        <table className='table'>
                                                            <thead>
                                                                <tr className='bg-third text-dark'>
                                                                    <th className='text-lg-center' scope='col' colSpan='2'>貓狗寵物各類花費粗估（元 / 每年）</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='text-danger fw-bolder'>一次性花費</td>
                                                                    <td>晶片登記 + 結紮 3,500元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='bg-primary-light'>伙食費</td>
                                                                    <td>6,000～50,000元（視體型餐點內容而定）</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='bg-primary-light'>清潔美容</td>
                                                                    <td>7,000～15,000元 （視體型和品種而定）</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='bg-primary-light'>醫療費</td>
                                                                    <td>數千～數萬（視年齡、健康狀況而定）</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='bg-primary-light'>疫苗費</td>
                                                                    <td>3,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='bg-primary-light'>日用品添購</td>
                                                                    <td>3,000～6,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>每年合計（扣除一次性花費）</td>
                                                                    <td>21,000～77,500元以上</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle text-lg-center'>寵物醫院常見醫療項目與收費價格</h2>
                                                    <p className='text-lg-center'>至於寵物醫療費用大概是怎樣的情形呢？為求確實，此處整理「台北市獸醫師公會診療費用標準」供大家參考。</p>
                                                    <div className='table-responsive-xl col-lg-8 mx-auto'>
                                                        <table className='table'>
                                                            <thead>
                                                                <tr className='bg-third text-dark'>
                                                                    <th className='text-lg-center' scope='col' colSpan='3'>寵物醫院常見醫療項目與收費表（項目 / 元）</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='fw-bolder text-secondary'>掛號費</td>
                                                                    <td>一般掛號</td>
                                                                    <td className='text-end'>200元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>門診時間內急診掛號</td>
                                                                    <td className='text-end'>500元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>門診時間外急診掛號</td>
                                                                    <td className='text-end'>3,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder text-secondary'>診察費</td>
                                                                    <td>一般診察</td>
                                                                    <td className='text-end'>500元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>急診診察</td>
                                                                    <td className='text-end'>800元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>出診診察</td>
                                                                    <td className='text-end'><small>(半小時)</small>800元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>諮詢</td>
                                                                    <td className='text-end'><small>(半小時、車資另計)</small>500元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder text-secondary'>檢驗費</td>
                                                                    <td>顯微鏡檢查</td>
                                                                    <td className='text-end'><small>(因細項不同而異)</small>300~500元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>血液檢驗</td>
                                                                    <td className='text-end'><small>(因細項不同而異)</small>250～3,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>尿液試紙檢驗</td>
                                                                    <td className='text-end'>600元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>臨床病理檢查</td>
                                                                    <td className='text-end'><small>(因細項不同而異)</small>500～5,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>免疫學檢驗傳染病檢測</td>
                                                                    <td className='text-end'>1,500元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>影像學檢查</td>
                                                                    <td className='text-end'><small>(因細項不同而異)</small>500~3,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>超音波檢查</td>
                                                                    <td className='text-end'><small>(因細項不同而異)</small>2,000~10,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder text-secondary'>治療費</td>
                                                                    <td>技術費</td>
                                                                    <td className='text-end'><small>(因細項不同而異)</small>200~10,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>一般治療費</td>
                                                                    <td className='text-end'><small>(因細項不同而異)</small>500～15,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>特殊治療費</td>
                                                                    <td className='text-end'><small>(因細項不同而異)</small>1,500~3,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>急救</td>
                                                                    <td className='text-end'>6,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>預防接種費</td>
                                                                    <td className='text-end'>300~1,500元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder text-secondary'>手術費</td>
                                                                    <td>-</td>
                                                                    <td className='text-end'><small>（視各家診療機構狀況而定）</small></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder text-secondary'>鎮定麻醉費</td>
                                                                    <td>-</td>
                                                                    <td className='text-end'>1,000~10,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder text-secondary'>住院費</td>
                                                                    <td>-</td>
                                                                    <td className='text-end'><small>（每日）</small>500~2,500元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder text-secondary'>特別照護</td>
                                                                    <td>-</td>
                                                                    <td className='text-end'>250元<small>（每小時）</small>~30,000<small>（每日）</small></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder text-secondary'>文件申請</td>
                                                                    <td>-</td>
                                                                    <td className='text-end'><small>（因細項不同而異）</small>2,000 ~ 3,500元</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <p>寵物因為沒有健保，醫療費用會比我們一般人看病時還要貴，這也是許多飼主在寵物老年時期大喊吃不消的原因。而我們生活周遭不幸出現棄養的狀況時，也多半是卡在這階段。</p>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>人有健保，別忘了毛孩也有寵物保險！醫療保障這樣賠！</h2>
                                                    <p>其實，想要解決寵物醫療支出問題並不難，只要投保「寵物保險」就能有效減輕重擔！<strong>寵物險都有醫療保障，通常分成「門診」、「住院」以及「手術」三類別。</strong></p>
                                                    <p>例如小明認養了一隻狗，並長期投保網站上的「華南」B方案，即擁有每一次事故「門診 2000元 + 住院 1 萬元 + 手術 5 萬元」的額度。</p>
                                                    <p>某天小明狗狗因為急性腎臟病需住進動物醫院五天，病房費每天 1200 元，那麼共可從住院1萬元額度裡申請到 6000 元的理賠</p>
                                                    <p>又假如狗狗在住院期間有動到手術，相關費用 3 萬元，那也可以從手術項目的 5 萬元上限額度來申請。所以前述狀況小明共可得到 36000 元的理賠金額，如此一來是不是減輕了許多負擔？</p>
                                                    <p className='d-inline-block border border-2 border-primary p-2'>1200 x 5 = 6000 （病房開銷）<br />30000 （手術開銷）<br />30000 + 6000 = 36000（本次事件獲得的理賠金額）</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>貓狗中老年後醫療費大增，應趁健康盡早投保</h2>
                                                    <p>孩還小時，身體較為健康，但到了中老年，有時症狀一冒出，便很難再跟疾病劃清界線，每隔幾個月就跑動物醫院是常有的事。而那時我們也與毛孩有了深厚的家人情誼，不可能不盡力救治。本來經濟能力較好的人也許還不用操心，但大多數人都會因這些花費而苦惱，建議趁著貓狗還年輕且無疾病的時期盡早投保，才能享有正常的保障。<strong>如果已罹患病症或傷殘，就不一定能夠被承保。</strong>最後也提醒大家，千萬別讓自己成了棄養寵物的主人喔！</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div className='col-12'>
                                            <div className='article-footer text-center py-4'>
                                                <span>分享：</span>
                                                <FacebookShareButton url={shareUrl} hashtag='#寵物醫院'><button className='btn facebook--icon-before'></button></FacebookShareButton>
                                                <LineShareButton url={shareUrl} title='寵物醫療費用是錢坑?寵物保險讓你荷包省錢不失血'><button className='btn line--icon-before'></button></LineShareButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
            { //6. 寵物保險理賠必知！「分項限制給付」與「限額實支實付」是什麼?
                pageId === 'article6' ?
                    <>
                        <Helmet>
                            <title>寵物保險理賠必知！「分項限制給付」與「限額實支實付」是什麼?|GOGO保-寵物險網投專屬平台</title>
                        </Helmet>
                        <div className='article'>
                            <img src={require('./article/寵物險NO.6_L.jpg').default} className='img-fluid d-none d-md-block' alt='寵物保險理賠必知！「分項限制給付」與「限額實支實付」是什麼?' />
                            <img src={require('./article/寵物險NO.6_S.jpg').default} className='img-fluid d-block d-md-none ' alt='寵物保險理賠必知！「分項限制給付」與「限額實支實付」是什麼?' />
                            <div className='overflow-hidden'>
                                <div className='container py-4'>
                                    <div className='row'>
                                        <div className='col-12 py-3'>
                                            <article className='article-content'>
                                                <h1 className='article-title'>寵物保險理賠必知！「分項限制給付」與「限額實支實付」是什麼?</h1>
                                                <p>近年來許多人都開始幫自家毛小孩投保寵物險，而根據資料顯示，寵物險發生理賠的機率其實真的頗高，也因為這樣，挑選保單前絕對要先弄懂理賠內容和規則，才能判斷什麼樣的保單最適合自家毛小孩。</p>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物險的醫療理賠保障些什麼？</h2>
                                                    <p>保險裡的醫療保障通常會包含「疾病 + 意外」。疾病引起的醫療開銷應該很好理解，而<strong>意外的定義則是「突發性、外來、非疾病」這三要素。</strong>通常可以把前者想成是「生病」，後者則是意外「受傷」。目前仍有少數寵物險的醫療保障是只保意外的，若想要廣泛的保障就務必要看清條款內容。</p>
                                                    <p>寵物醫療保障通常還分成三種具體項目：<strong>「門診」、「住院」和「手術」</strong>。若純粹門診就依照門診項目裡的額度上限申請理賠，住院或動手術也是同樣道理。三種具體項目各有不同的理賠上限，一般來說，門診花費較少，限額也就低；手術則較高，畢竟有動到手術，醫療費會貴上許多，限額也就跟著提高。</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物險的理賠規則？先弄懂「限額實支實付」和「分項限制給付」！</h2>
                                                    <div>
                                                        <h3 className='article-title--third my-3'>限額實支實付</h3>
                                                        <p>保險理賠一定有其限制，在許多醫療險或意外險裡頭，我們可能常聽到「實支實付」這名詞。意思是說<strong>「保留收據，依照實際上的醫療支出來申請該給付的保險金額」</strong>。但凡事總有上限，所以就會設個「限定額度」，約定好申請的理賠金額不能大過這數字，避免保險公司虧死，這時我們就稱為「限額實支實付」。</p>
                                                        <p>舉個例：小美養的狗狗肉圓生病必須動手術，後來共花了手術費3萬元，並且在每天收費 1000 元的寵物病房裡待三天。</p>
                                                        <p>那麼肉圓手術的賠償就須參照手術理賠限額，假如限額大於 3 萬元，就能獲得 3 萬元的理賠，假如限額只有 2 萬，那麼手術部分最多也只能賠 2 萬。同理，住院病房費的請領也是先看「每日住院」的限額，若大於 1000 元，那就能順利獲得三天共 3000 元的保險金。不過若有自負額的規定，那就有自己須負擔的部分囉！<a href='/aboutPet/article7' className='fw-bolder'>（自負額是什麼？）</a></p>
                                                    </div>
                                                    <div>
                                                        <h3 className='article-title--third my-3'>分項限制給付</h3>
                                                        <p>除了額度上限外，理賠次數也是一個常見的賠償限制。「分項限制給付」是說<strong>每個保障項目在保險期間內，能理賠的次數各自都不同，有其上限。</strong>例如門診費用理賠最多 5 次、住院費用最多 3 次、手術最多 2 次等等，就算保險金累積起來還沒達到一整年的額度上限，只要次數超過也不行再理賠。</p>
                                                        <p>簡單來說，<strong>「限額實支實付」和「分項限制給付」可以想成是「理賠額度和次數的控管」</strong>，瞭解就好，不一定要去記這些名詞解釋。接著再把上述兩個概念融合起來，就是我們常在廣告DM上看到的：「保險期間內累積限額XXXX元、每次最高XXXX元、最多X次」等字眼，可以在挑選保單時多注意這些細節，才能知道花出去的錢究竟換到多少保障。</p>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物醫療險細節大同小異，保障數字有多少很重要！</h2>
                                                    <p>以上兩件事都是很重要且攸關理賠的概念，寵物醫療險和人類醫療險比起來，條款描述較具一致性，細節差異沒那麼大，因此大多數的醫療保障還是取決於這些數字上。找商品時，先把醫療保障規劃充足，再來看條款細節和除外事項就會比較容易上手囉！</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div className='col-12'>
                                            <div className='article-footer text-center py-4'>
                                                <span>分享：</span>
                                                <FacebookShareButton url={shareUrl} hashtag='#寵物保險'><button className='btn facebook--icon-before'></button></FacebookShareButton>
                                                <LineShareButton url={shareUrl} title='寵物保險理賠必知！「分項限制給付」與「限額實支實付」是什麼?'><button className='btn line--icon-before'></button></LineShareButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
            { //7. 毛孩保險要挑對！沒人告訴你的寵物保險理賠眉角！
                pageId === 'article7' ?
                    <>
                        <Helmet>
                            <title>毛孩保險要挑對！沒人告訴你的寵物保險理賠眉角！|GOGO保-寵物險網投專屬平台</title>
                        </Helmet>
                        <div className='article'>
                            <img src={require('./article/寵物險NO.7_L.jpg').default} className='img-fluid d-none d-md-block' alt='毛孩保險要挑對！沒人告訴你的寵物保險理賠眉角！' />
                            <img src={require('./article/寵物險NO.7_S.jpg').default} className='img-fluid d-block d-md-none ' alt='毛孩保險要挑對！沒人告訴你的寵物保險理賠眉角！' />
                            <div className='overflow-hidden'>
                                <div className='container py-4'>
                                    <div className='row'>
                                        <div className='col-12 py-3'>
                                            <article className='article-content'>
                                                <h1 className='article-title'>毛孩保險要挑對！沒人告訴你的寵物保險理賠眉角！</h1>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物醫療費用大、理賠案例多，寵物險漸成飼主必備品</h2>
                                                    <p>養過貓狗到老的人都知道寵物的醫療開銷很大，而毛孩又不像人類一樣有健保，每次看醫生的花費，就算只是門診做點小治療或拿藥，也要好幾千元。等到了中年，慢慢有些病痛出來，一年內頻繁跑個醫院幾趟，累積下來的花費說是個錢坑都不誇張。</p>
                                                    <p>好幾年前，保險公司就一直在推廣貓狗專用的寵物險，也不斷調整保障內容，為的就是讓飼主們，不再為了寵物的醫療開銷而苦惱，也間接讓毛孩得到較妥善的照顧。而在近兩年，少子化嚴重，越來越多民眾轉向飼養毛小孩，把其當成自己家人、心愛的寶貝。同時也注意到寵物不能沒有保險，也因此寵物險才逐漸受到重視並慢慢普及。其實，寵物的傷病真的很難避免，利用寵物保險來轉嫁這些醫療支出絕對是最簡單又好用的方法。</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物醫療保險理賠必知3大眉角</h2>
                                                    <p>投保寵物險重點不外乎就是為了醫療理賠，但理賠與DM和條款上的規則息息相關，有些眉角一定要弄清楚，才不會買到和自己所想有落差的保障。以下是攸關理賠規則最重要的幾件事情，挑選時務必留意。</p>
                                                    <ul className='list-unstyled'>
                                                        <li>
                                                            <h3 className='article-title--third mb-3'>（一）許多保單都設有「自付額」，投保前先看清相關規定</h3>
                                                            <strong>寵物保單裡常見的「自負額」是什麼？</strong>
                                                            <p>這是說在保險期間內，發生約定的相關損失時，飼主須自行負擔一部份金額，其它多出的部分才由保險公司出。舉例來說，自負額註明為10%的寵物險，假設帶寵物去門診一次共花了2000元，那麼主人須自行出200元，剩下的1800元才由保險公司支付。</p>
                                                            <p>自負額的設定是為了避免有心人士利用寵物來獲取理賠，不是保險公司刁難，但只要稍微尋找，市場上也有完全沒自負額的商品。簡單說，若是有自負額，可從理賠上限和保障細項吸不吸引人去評估要不要買。而若是不喜歡有自負額規定的人，建議就直接挑比例較低或是完全沒自負額的保單。</p>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third mb-3'>（二）攸關寵物醫療費用的理賠次數與總額限制</h3>
                                                            <p>寵物險的保障大多為「限額內實支實付」的理賠方式，而「次數」和「額度上限」便是決定醫療保障到底有多少的兩大關鍵。例如有的廣告單上會這樣標註：</p>

                                                            <p className='d-inline-block border border-2 border-primary p-2'>
                                                                <span className='fw-bolder'>門診：</span><br />每一次理賠限額1,500元，一年最多四次<br />
                                                                <span className='fw-bolder'>住院：</span><br />每一次理賠限額5,000元，一年最多兩次<br />
                                                                <span className='fw-bolder'>手術：</span><br />每一次理賠限額15,000元，一年最多一次
                                                            </p>
                                                            <p>這些數字都是保險公司制定的保險金上限，實際理賠時只會少不會多。例如每次門診上限為1500的情況下，實際花了1200元，理賠也就只會賠1200元；反之，如果實際花了1800元，那理賠也不會是這數字，而是賠到單次最高上限1500元，這就是「限額內實支實付」的意思。當然我們也不一定每年都會用完醫療項目裡的總次數，但把這些額度數字相乘相加，仍可當做保障高低的參考。</p>
                                                        </li>
                                                        <li>
                                                            <h3 className='article-title--third mb-3'>（三）廣告單上提到理賠時的「每一次」等字眼是如何定義？</h3>
                                                            <p>寵物險的DM通常都會標示出保障的重點與簡單規則，但並非每家業者都表達得夠清楚。像是出現「每一次、每次」的字眼時，究竟是指<strong>「每一次事故」亦或是「每一次就醫」</strong>？如果是每一次事故，那短期內視為同一事故的第二度就醫行為，會自動扣掉一次每年可理賠的次數嗎？</p>
                                                            <small>（註）「每次事故」常見條款定義：「因同一疾病或傷害，或因此引起之併發症，十四天內於登記合格之獸醫院再次診療時，其各項保險金給付合計額，視為同一保險事故。」</small>
                                                            <p>上述說明，第一、第二點算是消費前必懂觀念，了解後我們就可自行從許多五花八門的商品裡找出適合自己的。最後一點則是大家常會有的疑問，建議在投保前先詢問清楚專業人員或窗口，才不會日後產生寵物醫療糾紛。</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </article>
                                        </div>
                                        <div className='col-12'>
                                            <div className='article-footer text-center py-4'>
                                                <span>分享：</span>
                                                <FacebookShareButton url={shareUrl} hashtag='#寵物保險'><button className='btn facebook--icon-before'></button></FacebookShareButton>
                                                <LineShareButton url={shareUrl} title='毛孩保險要挑對！沒人告訴你的寵物保險理賠眉角！'><button className='btn line--icon-before'></button></LineShareButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
            { //8. 2022最新全台寵物醫院整理，家有毛小孩必備！
                pageId === 'article8' ?
                    <>
                        <Helmet>
                            <title>2022最新全台寵物醫院整理，家有毛小孩必備！|GOGO保-寵物險網投專屬平台</title>
                        </Helmet>
                        <div className='article'>
                            <img src={require('./article/寵物險NO.8_L.jpg').default} className='img-fluid d-none d-md-block' alt='2022最新全台寵物醫院整理，家有毛小孩必備！' />
                            <img src={require('./article/寵物險NO.8_S.jpg').default} className='img-fluid d-block d-md-none ' alt='2022最新全台寵物醫院整理，家有毛小孩必備！' />
                            <div className='overflow-hidden'>
                                <div className='container py-4'>
                                    <div className='row'>
                                        <div className='col-12 py-3'>
                                            <article className='article-content'>
                                                <h1 className='article-title'>2022最新全台24H寵物醫院整理，家有毛小孩必備！</h1>
                                                <br />
                                                <p>毛小孩生病、受傷，半夜出現緊急狀況該怎辦？想必遇到這種狀況，主人們一定都很慌張。別擔心！這裡為大家準備了全台灣24小時看診的寵物（動物）醫院，不少都是網路上常推薦、頗受好評的院所，把文章收藏起來，下次有什麼狀況就不用擔心了！</p>
                                                <p>另外再告訴大家一個實用知識，如果你住的縣市真的沒有24H的寵物醫院，那也可以多詢問附近院所，最晚能夠看診到幾點？有沒有開放急診的聯絡電話？有一些醫院雖然沒有全天候營業，但醫生們也願意在一些時段為毛小孩緊急看診喔！如果住處附近有這樣的醫院，建議自行記錄下來，好應變平常各種突發狀況。</p>
                                                <div className='article-paragraph'>
                                                    <div className='mb-3 col-lg-5'>
                                                        <label htmlFor='item' className='fw-bolder text-danger'>查看全台寵物醫院(請選擇地區)</label>
                                                        <select className='form-select' id='item' name='item' onChange={e => setArticleId8AreaOption(e.target.value)}>
                                                            <option value='北北基地區'>北北基地區</option>
                                                            <option value='桃竹苗地區'>桃竹苗地區</option>
                                                            <option value='中彰投地區'>中彰投地區</option>
                                                            <option value='雲嘉南高屏及東部地區' selected>雲嘉南高屏及東部地區</option>
                                                        </select>
                                                    </div>
                                                    {
                                                        articleId8AreaOption === '北北基地區' ?
                                                            <div className='table-responsive-xl'>
                                                                <table className='table'>
                                                                    <thead>
                                                                        <tr className='bg-third text-dark'>
                                                                            <th className='text-lg-center' scope='col' colSpan='3'>北北基地區24H寵物醫院</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>基隆愛犬醫院</td>
                                                                            <td>基隆市中正區義一路188號</td>
                                                                            <td><a href='tel:+886-2-24229214'>02-2422-9214</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>成安動物醫院</td>
                                                                            <td>基隆市中山區成功二路54號</td>
                                                                            <td><a href='tel:+886-2-24233739'>02-2423-3739</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>大安動物醫院</td>
                                                                            <td>台北市中正區羅斯福路四段162號</td>
                                                                            <td><a href='tel:+886-2-27396828'>02-2739-6828</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>展望急診動物醫院</td>
                                                                            <td>台北市萬華區中華路二段2號</td>
                                                                            <td><a href='tel:+886-2-23880122'>02-2388-0122</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>全民動物醫院（民生總院）</td>
                                                                            <td>台北市大同區民生西路249號</td>
                                                                            <td><a href='tel:+886-2-25530303'>02-2553-0303</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>慈愛動物醫院（台北總院）</td>
                                                                            <td>台北市大同區寧夏路1號</td>
                                                                            <td><a href='tel:+886-2-25563320'>02-2556-3320</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>伊甸動物醫院</td>
                                                                            <td>台北市中山區北安路554巷33號</td>
                                                                            <td><a href='tel:+886-2-85092579'>02-8509-2579</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>太僕動物醫院</td>
                                                                            <td>台北市中山區龍江路260號</td>
                                                                            <td><a href='tel:+886-2-25170902'>02-2517-0902</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>南京太僕動物醫院</td>
                                                                            <td>台北市松山區南京東路五段286號</td>
                                                                            <td><a href='tel:+886-2-27562005'>02-2756-2005</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>隆記動物醫院</td>
                                                                            <td>台北市松山區民生東路五段212巷1號</td>
                                                                            <td><a href='tel:+886-2-27607639'>02-2760-7639</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>布達羊急診動物醫院</td>
                                                                            <td>台北市士林區忠誠路一段102號</td>
                                                                            <td><a href='tel:+886-2-28341119'>02-2834-1119</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>阿牛犬貓急診醫院</td>
                                                                            <td>台北市士林區基河路238號</td>
                                                                            <td><a href='tel:+886-2-28827381'>02-2882-7381</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>全民動物醫院（北投分院）</td>
                                                                            <td>台北市北投區懷德街6-3號</td>
                                                                            <td><a href='tel:+886-2-28939752'>02-2893-9752</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>大群動物醫院</td>
                                                                            <td>台北市文山區羅斯福路六段206號</td>
                                                                            <td><a href='tel:+886-2-29305557'>02-2930-5557</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>全國動物醫院（台北分院）</td>
                                                                            <td>台北市內湖區舊宗路一段30巷13號</td>
                                                                            <td><a href='tel:+886-2-87918706'>02-8791-8706</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>翔心動物醫院</td>
                                                                            <td>新北市板橋區忠孝路203號</td>
                                                                            <td><a href='tel:+886-2-29569099'>02-2956-9099</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>來來動物醫院</td>
                                                                            <td>新北市中和區德光路29號</td>
                                                                            <td><a href='tel:+886-2-89539739'>02-8953-9739</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>提姆沃克動物醫院</td>
                                                                            <td>新北市三重區中正北路23號</td>
                                                                            <td><a href='tel:+886-2-89829291'>02-8982-9291</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>亞東動物醫院</td>
                                                                            <td>新北市中和區中正路639號</td>
                                                                            <td><a href='tel:+886-2-22218515'>02-2221-8515</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>中日動物醫院</td>
                                                                            <td>新北市中和區中山路三段2號</td>
                                                                            <td><a href='tel:+886-2-22263639'>02-2226-3639</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>來安動物醫院</td>
                                                                            <td>新北市新店區安康路二段115-1號</td>
                                                                            <td><a href='tel:+886-2-22118890'>02-2211-8890</a></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div> : ''
                                                    }
                                                    {
                                                        articleId8AreaOption === '桃竹苗地區' ?
                                                            <div className='table-responsive-xl'>
                                                                <table className='table'>
                                                                    <thead>
                                                                        <tr className='bg-third text-dark'>
                                                                            <th className='text-lg-center' scope='col' colSpan='3'>桃竹苗地區24H寵物醫院</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>元氣動物醫院</td>
                                                                            <td>桃園市桃園區三民路三段381號</td>
                                                                            <td><a href='tel:+886-3-3333816'>03-333-3816</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>元氣動物醫院（藝文分院）</td>
                                                                            <td>桃園市桃園區莊敬路一段156號</td>
                                                                            <td><a href='tel:+886-3-3553911'>03-355-3911</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>品湛動物醫院</td>
                                                                            <td>桃園市桃園區民生路495-9號</td>
                                                                            <td><a href='tel:+886-3-3363252'>03-336-3252</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>磨鼻子動物醫院</td>
                                                                            <td>桃園市中壢區延平路20號</td>
                                                                            <td><a href='tel:+886-3-4535740'>03-453-5740</a></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div> : ''
                                                    }
                                                    {
                                                        articleId8AreaOption === '中彰投地區' ?
                                                            <div className='table-responsive-xl'>
                                                                <table className='table'>
                                                                    <thead>
                                                                        <tr className='bg-third text-dark'>
                                                                            <th className='text-lg-center' scope='col' colSpan='3'>中彰投地區24H寵物醫院</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>全國動物醫院（總院）</td>
                                                                            <td>台中市西區五權八街100號</td>
                                                                            <td><a href='tel:+886-4-23710496'>04-2371-0496</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>康德動物醫院</td>
                                                                            <td>台中市北屯區崇德路二段270號</td>
                                                                            <td><a href='tel:+886-4-22412700'>04-2241-2700</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>艾利動物醫院</td>
                                                                            <td>台中市西屯區惠中路二段41號</td>
                                                                            <td><a href='tel:+886-4-22589518'>04-2258-9518</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>台灣動物醫院（教學醫院）</td>
                                                                            <td>台中市西屯區青海路二段69號</td>
                                                                            <td><a href='tel:+886-4-23177069'>04-2317-7069</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>毛公館動物醫院</td>
                                                                            <td>台中市南屯區公益路二段685號</td>
                                                                            <td><a href='tel:+886-4-23809513'>04-2380-9513</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>吉米哈利動物醫院</td>
                                                                            <td>台中市南屯區大聖街250號</td>
                                                                            <td><a href='tel:+886-4-23206910'>04-2320-6910</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>慈愛動物醫院（台中總院）</td>
                                                                            <td>台中市大里區國光路二段539號</td>
                                                                            <td><a href='tel:+886-4-24066688'>04-2406-6688</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>成大動物醫院</td>
                                                                            <td>台中市清水區臨港路五段658巷27號</td>
                                                                            <td><a href='tel:+886-4-26398365'>04-2639-8365</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>快樂寵物醫院</td>
                                                                            <td>彰化縣彰化市彰南路二段180號</td>
                                                                            <td><a href='tel:+886-4-7384978'>04-738-4978</a></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div> : ''
                                                    }
                                                    {
                                                        articleId8AreaOption === '雲嘉南高屏及東部地區' ?
                                                            <div className='table-responsive-xl'>
                                                                <table className='table'>
                                                                    <thead>
                                                                        <tr className='bg-third text-dark'>
                                                                            <th className='text-lg-center' scope='col' colSpan='3'>雲嘉南高屏及東部地區24H寵物醫院</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>慈愛動物醫院（台南總院）</td>
                                                                            <td>台南市南區西門路一段473號</td>
                                                                            <td><a href='tel:+886-6-2203166'>06-220-3166</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>全國動物醫院（永康分院）</td>
                                                                            <td>台南市永康區中華路103號2樓</td>
                                                                            <td><a href='tel:+886-6-3133116'>06-313-3116</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>烏鐸動物醫院</td>
                                                                            <td>高雄市苓雅區中正一路139號</td>
                                                                            <td><a href='tel:+886-7-7220804'>07-722-0804</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>冠安動物醫院</td>
                                                                            <td>高雄市苓雅區中正二路131-1號</td>
                                                                            <td><a href='tel:+886-7-2236451'>07-223-6451</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>宏力動物醫院</td>
                                                                            <td>高雄市三民區明誠一路326號</td>
                                                                            <td><a href='tel:+886-7-3102819'>07-310-2819</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='text-secondary fw-bolder'>上海動物醫院</td>
                                                                            <td>花蓮市上海街63號</td>
                                                                            <td><a href='tel:+886-928855803'>0928855803</a></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div> : ''
                                                    }
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>24小時寵物醫院高額開銷可善用寵物險轉嫁</h2>
                                                    <p>以上就是小編收集到的24小時寵物醫院清單，其實可以看出在台灣還有很多縣市都缺乏這方面資源，如果夜間需要急診，恐怕還得再花一筆交通費或自行開車到鄰近縣市。另外也提醒大家，夜間能急診雖然方便，但除了看診費較貴外，到了這程度，很多時候寵物都已帶有較大的傷病，後續將面臨頻繁就醫或是動手術的局面。建議趁毛孩健康時早點投保寵物險，以免有體況後就無法承保，也沒得轉嫁醫療支出了，養毛小孩，真的不簡單啊！</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div className='col-12'>
                                            <div className='article-footer text-center py-4'>
                                                <span>分享：</span>
                                                <FacebookShareButton url={shareUrl} hashtag='#寵物保險'><button className='btn facebook--icon-before'></button></FacebookShareButton>
                                                <LineShareButton url={shareUrl} title='2022最新全台24H寵物醫院整理，家有毛小孩必備！'><button className='btn line--icon-before'></button></LineShareButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
            { //9. 貓狗狂打噴涕舔手腳？家中毛孩有這些跡象要注意！
                pageId === 'article9' ?
                    <>
                        <Helmet>
                            <title>貓狗狂打噴涕舔手腳？家中毛孩有這些跡象要注意！|GOGO保-寵物險網投專屬平台</title>
                        </Helmet>
                        <div className='article'>
                            <img src={require('./article/寵物險NO.9_L.jpg').default} className='img-fluid d-none d-md-block' alt='貓狗狂打噴涕舔手腳？家中毛孩有這些跡象要注意！' />
                            <img src={require('./article/寵物險NO.9_S.jpg').default} className='img-fluid d-block d-md-none ' alt='貓狗狂打噴涕舔手腳？家中毛孩有這些跡象要注意！' />
                            <div className='overflow-hidden'>
                                <div className='container py-4'>
                                    <div className='row'>
                                        <div className='col-12 py-3'>
                                            <article className='article-content'>
                                                <h1 className='article-title'>貓狗狂打噴涕舔手腳？家中毛孩有這些跡象要注意！</h1>
                                                <br />
                                                <p>貓狗是台灣最常見的寵物，也是我們疼愛的家人，但寶貝們不會說話，有時只能藉由一些行為舉動來觀察。這時如果出現怪異徵兆，並非都是身體有問題，也有可能是大家常忽略的心理疾病！以下介紹一些貓狗常見行為讓大家了解。</p>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>狗狗貓貓反覆打噴嚏代表什麼？</h2>
                                                    <div>
                                                        <h3 className='article-title--third'>【狗】</h3>
                                                        <p>狗如果一直打噴嚏，可以先試著給狗狗喝水，如果是口鼻通道裡有微小異物刺激到，通常喝些水就能順利清除。如果還是不停地打噴嚏，那有可能是對環境過敏，必須給醫生看看同時找出過敏原因。像是「粉塵、花粉、黴菌、塵螨」都可能造成貓狗過敏。</p>
                                                    </div>
                                                    <div>
                                                        <h3 className='article-title--third'>【貓】</h3>
                                                        <p>跟狗比起來，貓咪打噴嚏比較有可能是感冒，但也同樣有一部分機率是過敏，除了檢查平常環境外也要檢視貓砂的材質是否容易產生粉塵。如果噴嚏常伴隨眼淚，或是眼耳鼻有分泌物、拉肚子，那麼極有可能是生病，較需擔憂的的狀況是上呼吸道病毒感染，其中又以<strong>「貓皰疹病毒」</strong>較為嚴重，類似貓界的流行性感冒，亦有機率造成致命危機。</p>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>狗狗貓貓狂舔腳代表什麼？</h2>
                                                    <div>
                                                        <h3 className='article-title--third'>【狗】</h3>
                                                        <p>養過狗的人應該都看過狗狗舔自己腳掌的樣子，如果狀況很頻繁，帶去就醫，通常會發現是感染黴菌而發癢想舔。最後越舔越嚴重，造成皮膚發炎、紅腫、掉毛、脫皮等情形。但也有時候，狗狗舔手腳是跟心理狀況有關！身體健康的狗狗，如果長期感到壓力無法排解，或是十分無聊，也有可能不停地舔自己手腳來舒緩壓力。這時越是制止，狗狗會誤以為主人因為舔腳這行為而跑來互動，結果越舔越兇、惡性循環。正確的方法是找出狗狗壓力來源並滿足一些心理需求。</p>
                                                    </div>
                                                    <div>
                                                        <h3 className='article-title--third'>【貓】</h3>
                                                        <p>至於貓咪平常舔腳主要是為了清潔毛髮，但如果被細菌給感染也會舔個不停，這時就可能吃入太多毛髮導致腸胃消化出現問題。不過貓咪若長期缺乏主人關愛或是覺得無聊、憂鬱，也同樣會不停地舔身上特定部位，這時就要檢視一下自己與貓咪之間的相處是否有問題。</p>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物保險的醫療保障也有賠心理方面疾病</h2>
                                                    <p>寵物也跟人一樣，可能罹患心理疾病，因為這樣而就醫產生的醫療費，原則上也在寵物險的承保範圍內。如果觀察到家中毛小孩有異於平常的舉動，且外觀又沒受傷，也沒有明顯生病，最好盡快就醫了解狀況，及早尋求專業幫助，才不會讓寶貝們的心理疾病越來越加重喔！</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle text-lg-center'>必知！寵物這些行為可能也跟身體狀況有關</h2>
                                                    <div className='table-responsive-xl mx-auto'>
                                                        <table className='table'>
                                                            <thead>
                                                                <tr className='bg-third text-dark'>
                                                                    <th className=''></th>
                                                                    <th className='' width='150'>異常行為</th>
                                                                    <th className=''>可能狀況</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder'>狗</td>
                                                                    <td className='fw-bolder'>打哈欠</td>
                                                                    <td style={{ whiteSpace: 'normal' }}>除了疲倦外，也有可能是對環境感到壓力。若此時狗狗身邊有較不熟的人時，代表狗狗對此人的存在還有些不習慣，也還不太能與其互動。</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder'></td>
                                                                    <td className='fw-bolder'>抱頭或頭頂牆壁</td>
                                                                    <td style={{ whiteSpace: 'normal' }}>常常用前腳壓著頭或是用頭頂著牆壁，很有可能是罹患跟頭部有關的疾病，一發現最好立即就醫。</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder'></td>
                                                                    <td className='fw-bolder'>不停流眼淚</td>
                                                                    <td style={{ whiteSpace: 'normal' }}>可能是淚腺受感染、發炎，但也要注意是否為過敏徵兆或是睫毛倒插刺激到眼睛。</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder'></td>
                                                                    <td className='fw-bolder'>追自己尾巴繞圈圈</td>
                                                                    <td style={{ whiteSpace: 'normal' }}>有可能是感到無聊想吸引主人注意，但也有可能是罹患強迫症或是分離焦慮症發作，應及早就醫治療。</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder'></td>
                                                                    <td className='fw-bolder'>指甲有傷還瘋狂挖掘</td>
                                                                    <td style={{ whiteSpace: 'normal' }}>若指甲太長，狗狗可能會故意磨損爪子，不過如果感到極度鬱悶或無聊，精力無處發洩時，也可能會做出此行為，這時應適度帶狗兒去運動。</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder'>貓</td>
                                                                    <td className='fw-bolder'>走路姿勢不協調</td>
                                                                    <td style={{ whiteSpace: 'normal' }}>貓平常是種反應動作很迅速的動物，如果走路歪歪斜斜或是有點跛腳感，有可能是腳掌或四肢有傷，可能傷及骨頭，或是腸胃不舒服。</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder'></td>
                                                                    <td className='fw-bolder'>鼻頭乾、鼻涕不透明</td>
                                                                    <td style={{ whiteSpace: 'normal' }}>有可能是感冒或是上呼吸道遭受感染，如帶有血絲也可能是其它疾病，最好就醫檢查一下。</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder'></td>
                                                                    <td className='fw-bolder'>長期躲藏不見人</td>
                                                                    <td style={{ whiteSpace: 'normal' }}>本來好端端不怕人的寶貝，忽然變成誰都不願見，喜歡躲藏在不易找到的地方，要小心可能是抑鬱症。</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className='col-12'>
                                            <div className='article-footer text-center py-4'>
                                                <span>分享：</span>
                                                <FacebookShareButton url={shareUrl} hashtag='#寵物行為'><button className='btn facebook--icon-before'></button></FacebookShareButton>
                                                <LineShareButton url={shareUrl} title='貓狗狂打噴涕舔手腳？家中毛孩有這些跡象要注意！'><button className='btn line--icon-before'></button></LineShareButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
            { //10. 養貓狗要準備多少錢？一張寵物花費表告訴你！
                pageId === 'article10' ?
                    <>
                        <Helmet>
                            <title>養貓狗要準備多少錢？一張寵物花費表告訴你！|GOGO保-寵物險網投專屬平台</title>
                        </Helmet>
                        <div className='article'>
                            <img src={require('./article/寵物險NO.10_L.jpg').default} className='img-fluid d-none d-md-block' alt='養貓狗要準備多少錢？一張寵物花費表告訴你！' />
                            <img src={require('./article/寵物險NO.10_S.jpg').default} className='img-fluid d-block d-md-none ' alt='養貓狗要準備多少錢？一張寵物花費表告訴你！' />
                            <div className='overflow-hidden'>
                                <div className='container py-4'>
                                    <div className='row'>
                                        <div className='col-12 py-3'>
                                            <article className='article-content'>
                                                <h1 className='article-title'>養貓狗要準備多少錢？一張寵物花費表告訴你！</h1>
                                                <br />
                                                <p>現代社會腳步忙碌、物價高，與其尋覓伴侶再到結婚生子，不少人直接選擇養個毛小孩當家人，同樣可以讓身心變豐富，生活也更歡樂。但養個毛孩究竟要花多少錢，大家真的知道嗎？</p>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle text-lg-center'>貓咪花費參考表</h2>
                                                    <div className='table-responsive-xl col-lg-8 mx-auto'>
                                                        <table className='table'>
                                                            <thead>
                                                                <tr className='bg-third text-dark'>
                                                                    <th colSpan='3' className='text-center'>養貓開銷總整理</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder text-center' colSpan='3'>一次性花費</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>植晶片</td>
                                                                    <td className='' colSpan='2'>300元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>登記</td>
                                                                    <td className='' colSpan='2'>1,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>節紮</td>
                                                                    <td className='' colSpan='2'>3,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>生活起居設備</td>
                                                                    <td className='' colSpan='2'>6,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder text-center' colSpan='3'>每年固定花費</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>健康維持</td>
                                                                    <td className=''>各式疫苗</td>
                                                                    <td className=''>1,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>保健藥品</td>
                                                                    <td className=''>5,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>健康檢查</td>
                                                                    <td className=''>3,000～10,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>基本伙食</td>
                                                                    <td className=''>飼料</td>
                                                                    <td className=''>9,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>鮮食</td>
                                                                    <td className=''>12,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>清潔美容</td>
                                                                    <td className=''>洗澡</td>
                                                                    <td className=''>1,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>梳理毛髮</td>
                                                                    <td className=''>1,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>日常必須</td>
                                                                    <td className=''>貓砂</td>
                                                                    <td className=''>6,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>玩具其它</td>
                                                                    <td className=''>2,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>突發醫療</td>
                                                                    <td className=''>門診</td>
                                                                    <td className=''>500～1,500元 / 次</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>手術</td>
                                                                    <td className=''>1,500～6,000元 / 次</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>住院</td>
                                                                    <td className=''>3,000元～數萬以上 / 次</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan='3' className='text-end'>單位：新台幣（元）</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle text-lg-center'>狗狗花費參考表</h2>
                                                    <div className='table-responsive-xl col-lg-8 mx-auto'>
                                                        <table className='table'>
                                                            <thead>
                                                                <tr className='bg-third text-dark'>
                                                                    <th colSpan='3' className='text-center'>養狗開銷總整理</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder text-center' colSpan='3'>一次性花費</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>植晶片</td>
                                                                    <td className='' colSpan='2'>300元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>登記</td>
                                                                    <td className='' colSpan='2'>1,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>節紮</td>
                                                                    <td className='' colSpan='2'>2,500~3,500元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>生活起居設備</td>
                                                                    <td className='' colSpan='2'>6,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-secondary fw-bolder text-center' colSpan='3'>每年固定花費</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>健康維持</td>
                                                                    <td className=''>各式疫苗</td>
                                                                    <td className=''>4,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>保健藥品</td>
                                                                    <td className=''>6,000~10,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>健康檢查</td>
                                                                    <td className=''>3,000～10,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>基本伙食</td>
                                                                    <td className=''>飼料</td>
                                                                    <td className=''>
                                                                        <p>小型犬:6,000元</p>
                                                                        <p>中型犬:8,000元</p>
                                                                        <p>大型犬:12,000元</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>鮮食</td>
                                                                    <td className=''>
                                                                        <p>小型犬:6,000~20,000元</p>
                                                                        <p>中型犬:12,000~40,000元</p>
                                                                        <p>大型犬:25,000~40,000元</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>清潔美容</td>
                                                                    <td className=''>洗澡</td>
                                                                    <td className=''>
                                                                        <p>小型犬:300~500元</p>
                                                                        <p>中型犬:500~800元</p>
                                                                        <p>大型犬:800~1,200元</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>梳理毛髮</td>
                                                                    <td className=''>1,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>日常必須</td>
                                                                    <td className=''>排泄清潔</td>
                                                                    <td className=''>5,000~8,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>玩具其它</td>
                                                                    <td className=''>2,000元</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='fw-bolder'>突發醫療</td>
                                                                    <td className=''>門診</td>
                                                                    <td className=''>500～1,500元 / 次</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>手術</td>
                                                                    <td className=''>1,500～6,000元 / 次</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className=''></td>
                                                                    <td className=''>住院</td>
                                                                    <td className=''>3,000元～數萬以上 / 次</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan='3' className='text-end'>單位：新台幣（元）</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>寵物醫療費是最難估的錢坑！</h2>
                                                    <p>從上方表格可以看出毛孩的伙食與日常花費雖然多，但至少能先預估並準備，而「突發醫療」的花費卻像是顆不定時炸彈，不知何時會出現，也不知會花多少錢。於是許多飼主都會另外努力存個「寵物醫療基金」，目標大概為 10～20 萬元。像這樣的金額對很多人來說，並非那麼容易就存到，可能要花個幾年時間才能達標。所以不少人會在還沒存好前，先投保一年一期的寵物保單以應付危機。</p>
                                                </div>
                                                <div className='article-paragraph'>
                                                    <h2 className='article-title--subtitle'>努力存錢外也能利用寵物險當醫療後盾</h2>
                                                    <p>用寵物險來轉嫁醫療支出是最簡單有效的好方法，市面上寵物險最主打的就是醫療保障，畢竟這保單的初始用意即為「寵物的健保」，不希望主人們因為突發的醫療費而陷入經濟困境，無法給予寵物較好的治療。除此之外，寵物險可能還會有<strong>「寵物侵權責任」、「寵物寄宿」、「寵物喪葬」</strong>等細項保障，對比每年一、兩千元的保費，CP值其實相當高。建議認真想養毛孩的主人們，每年花點小錢幫寶貝們規劃保單，好當寶貝們的醫療後盾喔！</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div className='col-12'>
                                            <div className='article-footer text-center py-4'>
                                                <span>分享：</span>
                                                <FacebookShareButton url={shareUrl} hashtag='#寵物花費'><button className='btn facebook--icon-before'></button></FacebookShareButton>
                                                <LineShareButton url={shareUrl} title='養貓狗要準備多少錢？一張寵物花費表告訴你！'><button className='btn line--icon-before'></button></LineShareButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
        </>
    )
}
export default ArticlePage