
import './App.css';
import $ from 'jquery';
import './js/jquery.bxslider.js';

import React, { Component } from 'react';

import logo_big from './images/logo_big.png';
import facebook from './images/facebook.png';
import main from './images/main.png';
import p_ling_1 from './images/p_ling_1.png';
import p_ling_2 from './images/p_ling_2.png';
import p_ling_3 from './images/p_ling_3.png';
import p_collection_img from './images/p_collection_img.png';
import p_list_1 from './images/p_list_1.png';
import p_list_2 from './images/p_list_2.png';
import p_list_3 from './images/p_list_3.png';
import p_list_4 from './images/p_list_4.png';
import p_list_5 from './images/p_list_5.png';
import p_list_6 from './images/p_list_6.png';
import coco_dark from './images/coco_dark.png';
import ruban_all from './images/ruban_all.png';
import comete_all from './images/comete_all.png';
import camelia_all from './images/camelia_all.png';
import send from './images/send.png';
import foot_store from './images/foot_store.png';
import foot_social from './images/foot_social.png';
import youtube from './images/youtube.png';
import search from './images/search.png';
import finder from './images/finder.png';
import p_pink from './images/p_pink.png';
import box_pink_mobile from './images/box_pink_mobile.png';
import collection from './images/collection.png';
import collection_mobile from './images/collection_mobile.png';
import explore from './images/explore.png';
import p_neck from './images/p_neck.png';
import p_brace from './images/p_brace.png';
import p_ear from './images/p_ear.png';
import p_ear_2 from './images/p_ear_2.png';
import p_neck_2 from './images/p_neck_2.png';
import p_brace_2 from './images/p_brace_2.png';

import main_sub from './images/main_sub.png';
import search_white from './images/search_white.png';
import x from './images/x.png';
import watch from './images/watch.png';
import nail_red_all from './images/nail_red_all.png';
import ring from './images/ring.png';
import brace from './images/brace.png';
import x_pink from './images/x_pink.png';
import coco_brace_all from './images/coco_brace_all.png';
import coco_ring_all from './images/coco_ring_all.png';
import best_1 from './images/best_1.png';
import best_2 from './images/best_2.png';
import best_3 from './images/best_3.png';
import click from './images/click.png';


class App extends Component {

  componentDidMount() {

    // 메인화면

    $('.menu-tab').on('click',function() {
      $('.menu-hide').toggleClass('show');
      $('.menu-tab').toggleClass('active');
    });

    $('a').on('click', function() {
      $('.menu-hide').removeClass('show');
      $('.menu-tab').removeClass('active');
    });

    $('#button').on('click', function() {
      $('html, body').animate({
          scrollTop: 0
      }, 'slow');
      return false;
    });

    $('.bxslider').bxSlider({
      mode: 'horizontal',
      moveSlides: 4, 
      slideMargin: 0,
      infiniteLoop: true,
      slideWidth: 750,
      minSlides: 3,
      maxSlides: 3,
      speed: 800,
    });

    $('.bxslider2').bxSlider({
      mode: 'horizontal',
      moveSlides: 1,
      slideMargin: 0,
      infiniteLoop: true,
      slideWidth: 750,
      minSlides: 1,
      maxSlides: 1,
      speed: 800,
    });

    // 서브화면
    $('#button_sub').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // 초기 서브화면 숨김
    $("#wrap_sub").hide();

    $("#newProdect").on('click', function() {
      $("#wrap").hide();
      $("#wrap_sub").show();
    });

    $("#logo_sub").on('click', function() {
      $("#wrap").show();
      $("#wrap_sub").hide();
    });

    $("#clickMe").on('click', function() {
      $("#wrap").hide();
      $("#wrap_sub").show();
    });

  }

  render() {

    return (
      <>
        <div id="wrap">
            <section id="content">
                <div id="fix_button">
                    <div id="button">
                        <a href="#top">
                            <div className="circle">
                                <h6>^</h6>
                                <h4>TOP</h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="main1">
                    <div id="fix">
                        <div className="menu-tab">
                            <div id="one"></div>
                            <div id="two"></div>
                            <div id="three"></div>
                        </div>
                        <div className="menu-hide">
                            <nav>
                                <ul>
                                    <li id="logo"><a href="#"><img src={logo_big} alt="샤넬로고" /></a></li>
                                    <li><a href="#">PRODUCT</a></li>
                                    <li><a href="#">BRAND</a></li>
                                    <li><a href="#">SERVICE</a></li>
                                    <li><a href="#">CONTACT</a></li>
                                    <li id="none"><a href="#"><img src={facebook} alt="페이스북" /> &nbsp;&nbsp;&nbsp;<img src={youtube} alt="유투브" /></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div id="main">
                      <img src={main} alt="메인이미지" />
                        <a href="#"><img src={search} alt="검색창" /></a>
                        <a href="#"><img src={finder} alt="돋보기" /></a>
                        <input type="search" size="20" style={{border:"0", backgroundColor: "transparent", color:"#000"}} />
                        <h1>CHANEL</h1>
                        <h1>JEWERLY</h1>
                        <p>샤넬하우스 전문가들의 세심한 손을 거쳐<br/> 샤넬만의 진귀한 보석이 탄생합니다.</p>
                        <div className="buttons">
                            <div className="container">
                                <a id = "newProdect" href="#" target="_self" className="btn btn-4"><span>신제품 보기</span></a>
                            </div>
                        </div>
                    </div>
                    <div id="main2">
                        <div id="box2">
                            <ul className="bxslider2">
                                <li><img src={p_ling_1} alt="p_ling1" /></li>
                                <li><img src={p_ling_2} alt="p_ling2" /></li>
                                <li><img src={p_ling_3} alt="p_ling3" /></li>
                            </ul>
                        </div>

                        <img src={p_collection_img} alt="p_collection" />
                    </div>
                    <div id="main3">
                        <img src={p_pink} alt="p_pinkbox" />
                        <img src={box_pink_mobile} alt="pinkbox_mobile" />
                        <div id="box">
                            <ul className="bxslider">
                                <li><img src={p_list_1} alt="p_list1" /><img className="margin" src={p_ear} alt="p_earring" /></li>
                                <li><img src={p_list_2} alt="p_list2" /><img className="margin" src={p_neck} alt="p_necklace" /></li>
                                <li><img src={p_list_3} alt="p_list3" /><img className="margin" src={p_brace} alt="p_bracelet" /></li>
                                <li><img src={p_list_4} alt="p_list4" /><img className="margin" src={p_ear_2} alt="p_earring2" /></li>
                                <li><img src={p_list_5} alt="p_list5" /><img className="margin" src={p_neck_2} alt="p_necklace2" /></li>
                                <li><img src={p_list_6} alt="p_list6" /><img className="margin" src={p_brace_2} alt="p_bracelet2" /></li>
                            </ul>
                        </div>
                    </div>
                    <div id="main4">
                        <img src={collection} alt="collection list" />
                        <img src={collection_mobile} alt="collection list_mobile" />
                        <div id="collection_img">
                        <img src={coco_dark} alt=""/>
                        <a id = "clickMe" href="#">
                          <button className="button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE">
                            <span>COCO COLLECTION</span>
                          </button>
                        </a>
                            <img src={ruban_all} alt=""/>
                            <img src={comete_all} alt=""/>
                            <img src={camelia_all} alt=""/>
                        </div>
                    </div>
                    <div id="back_img">
                        <form method="post">
                            <table>
                              <tbody>
                                <tr>
                                    <td>CONTACT US</td>
                                </tr>
                                <tr>
                                    <td>
                                      <input type="email" name="mailaddress" placeholder="Email Address" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                      <input type="tel" name="phonenumber" placeholder="Phone Number" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                      <textarea name="text_message" rows="4" placeholder="Message" required></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                      <input type="image" src={send} name="submit_button" value="SEND" alt=""/>
                                    </td>
                                </tr>
                              </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </section>
            <footer id="foot">
                <img src={foot_store} alt="store " />
                <img src={foot_social} alt="social " />
                <img src={facebook} alt="facebook " />
                <img src={youtube} alt="youtube " />
                <p>
                  샤넬 부티크에서 만나뵙기를<br /> 기대합니다.<br/>
                </p>
                <div>
                    <a href="#"> > 부티크 찾기</a>
                </div>
                <p className="copy">copyright 2007. (Chanel corperation) all right reserved</p>
            </footer>
        </div>

        {/* 서브페이지 */}
        <div id="wrap_sub">
          <header id="head_sub">
              <div id="fix_button_sub">
                  <div id="button_sub">
                      <a href="#top">
                          <div className="circle">
                              <h6>▲</h6>
                              <h4>TOP</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div id="fix_sub">
                  <div className="menu-tab">
                      <div id="one_sub"></div>
                      <div id="two_sub"></div>
                      <div id="three_sub"></div>
                  </div>
                  <div className="menu-hide">
                      <nav>
                          <ul>
                              <li id="logo_sub"><a href="#"><img src={logo_big} alt="샤넬로고" /></a></li>
                              <li><a href="#">PRODUCT</a></li>
                              <li><a href="#">BRAND</a></li>
                              <li><a href="#">SERVICE</a></li>
                              <li><a href="#">CONTACT</a></li>
                              <li id="none_sub"><a href="#"><img src={facebook} alt="페이스북" /> &nbsp;&nbsp;&nbsp;<img src={youtube} alt="유투브" /></a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </header>
          <section id="main_sub">
              <div id="main1_sub">
                  <img src={main_sub} alt="메인1" />
                  <a href="#"><img src={search_white} alt="검색창" /></a>
                  <input type="search" size="16" style={{border:"0", backgroundColor: "transparent", color:"#fff"}} />
              </div>
              <div id="main2_sub">
                  <p>SPECIAL EDITION</p>
                  <h1>COCO CRUSH</h1>
                  <img src={x} alt="x-black" />
                  <img src={watch} alt="watch" />
                  <img src={nail_red_all} alt="royal" />
                  <img src={ring} alt="ring" />
                  <img src={brace} alt="bracelet" />
              </div>
              <div id="main3_sub">
                  <img src={x_pink} alt="x-pink" />
                  <h1>QUILTING MOTIVE</h1>
                  <p>
                    골드와 다이아몬드, 하우스의 상징적인 퀼팅 모티브가<br/>
                    조화를 이룬 COCO CRUSH는 패션 그 이상의 탁월한<br/>
                    세련미가 돋보이는 하이주얼리 컬렉션을 선보입니다.
                  </p>
                  <img src={coco_brace_all} alt="coco_bracelet" />
                  <img src={coco_ring_all} alt="coco_ring" />
                  <h1>CURSHISSIMO</h1>
                  <p>
                    샤넬은 대담한 시도와 독창적인 아이디어를 발산하여<br/>
                    시대의 흐름에 따른 클래식한 아름다움을 선보입니다.<br/>
                    모티브 위 흩뿌려진 진귀한 스톤들이 화려한 세팅으로<br/>
                    독특한 광채를 발산하며 주얼리에 품격을 더해줍니다.
                  </p>
                  <img src={x_pink} alt="x-pink" />
              </div>
              <div id="main4_sub">
                  <h1>BEST ITEMS</h1>
                  <img src={best_1} alt="best1" />
                  <p>
                    COCO CRUSH EARRING<br/>
                    (J11191)
                  </p>
                  <img src={best_2} alt="best2" />
                  <p>
                    COCO CRUSH RING<br/>
                    (J10865)
                  </p>
                  <img src={best_3} alt="best3" />
                  <p>
                    COCO CRUSH EARRING<br/>
                    (J11134)
                  </p>
              </div>
              <div id="main5_sub">
                  <h1>CRUSH INTERVIEW</h1>
                  <p>
                    키이라 나이틀리(Keira Knightley)의<br/>
                    솔직한 크러시 인터뷰를 만나보세요!
                  </p>
                  <iframe title="youtube" width="1300" height="830" src="https://www.youtube.com/embed/t25xecvpapY?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
              <div id="main6_sub">
                  <img src={click} alt="click" />
                  <a href="#"><img src={explore} alt="explore" /></a>
              </div>
          </section>
          <footer id="foot_sub">
              <img src={foot_store} alt="store " />
              <p>샤넬 부티크에서 만나뵙기를 기대합니다.<br/></p>
              <p><a href="#"> > 부티크 찾기</a></p>
              <img src={foot_social} alt="social " />
              <img src={facebook} alt="facebook " />
              <img src={youtube} alt="youtube " />
              <p>copyright 2007. (Chanel corperation) all right reserved</p>
          </footer>
      </div>

      </>
    );
  }

}

export default App;
