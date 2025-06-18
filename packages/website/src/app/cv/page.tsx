export default function Page() {
  return (
    <div className="mx-auto my-8 w-[8.27in]">
      <div className="h-full w-full border border-dashed border-gray-400 p-[1in]">
        <section className="my-8 w-full">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:flex-1">
              <h3 className="text-2xl font-bold">李鹏羽</h3>
              <p className="mt-2">前端工程师，全栈工程师</p>
              <p>13052777421</p>
            </div>
            <div className="md:w-auto">
              <p className="text-gray-500">北方民族大学计算机/本科</p>
              <p className="text-gray-500">1985/男/汉族</p>
              <p className="text-gray-500">期望薪资/9k-10K</p>
            </div>
          </div>
        </section>
        <section className="my-8 w-full">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:flex-1">
              <h3 className="text-2xl font-bold">简介</h3>
              <p className="mt-2">
                熟练完成复杂前端项目，具备快速建站能力，涵盖前端、后端、数据库、部署及服务器配置。拥有丰富的项目从0到1经验。
              </p>
            </div>
          </div>
        </section>
        <section className="my-8 w-full space-y-2">
          <h3 className="text-2xl font-bold">工作经历</h3>
          <div
            className="space-y-4"
            role="feed"
            aria-labelledby="work-experience"
          >
            <article role="article">
              <div className="py-1">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                      大连慧搜网络技术
                    </h3>
                    <ul
                      className="hidden list-none gap-x-1 p-0 sm:inline-flex"
                      aria-label="Technologies used"
                    >
                      <li>
                        <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/60 inline-flex items-center text-nowrap rounded-md border border-transparent px-2 py-0.5 align-middle font-mono text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                          React/Vue/Jquery
                        </div>
                      </li>
                      <li>
                        <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/60 inline-flex items-center text-nowrap rounded-md border border-transparent px-2 py-0.5 align-middle font-mono text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                          JavaScript/TypeScript
                        </div>
                      </li>
                    </ul>
                    <div
                      className="ml-auto text-sm tabular-nums text-gray-500"
                      aria-label="Employment period: 2025 to Present"
                    >
                      2010 - 2025
                    </div>
                  </div>
                  <h4 className="ftext-sm font-semibold">前端工程师</h4>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    专职前端工作，从初级到高级，积累了丰富的前端开发经验。参与多个大型项目，熟悉前端技术栈和开发流程。
                    <ul className="list-inside list-disc">
                      <li>开发维护 NHN 集团内部各项目前端部分</li>
                      <li>原日本 Hangame 前端项目组成员</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="py-1">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                      大连凯姆汽车
                    </h3>
                    <ul
                      className="hidden list-none gap-x-1 p-0 sm:inline-flex"
                      aria-label="Technologies used"
                    >
                      <li>
                        <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/60 inline-flex items-center text-nowrap rounded-md border border-transparent px-2 py-0.5 align-middle font-mono text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                          Java/Jsp
                        </div>
                      </li>
                      <li>
                        <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/60 inline-flex items-center text-nowrap rounded-md border border-transparent px-2 py-0.5 align-middle font-mono text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                          Struts/Spring/Hibernate
                        </div>
                      </li>
                      <li>
                        <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/60 inline-flex items-center text-nowrap rounded-md border border-transparent px-2 py-0.5 align-middle font-mono text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                          MySQL
                        </div>
                      </li>
                    </ul>
                    <div
                      className="ml-auto text-sm tabular-nums text-gray-500"
                      aria-label="Employment period: 2025 to Present"
                    >
                      2008 - 2010
                    </div>
                  </div>
                  <h4 className="ftext-sm font-semibold">软件工程师</h4>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    负责搭建公司汽车配件交易平台，收获了宝贵的项目经验和团队协作能力。
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="my-8 w-full space-y-2">
          <h3 className="text-2xl font-bold">工作项目</h3>
          <div className="space-y-4" role="feed" aria-labelledby="projects">
            <article role="article">
              <div className="flex flex-col space-y-1 py-1">
                <div className="flex items-center gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                    <a
                      className="inline-flex hover:underline"
                      href="https://console.nhncloud.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="nhncloud"
                    >
                      智能在线工单系统
                    </a>
                  </h3>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    在数月紧迫时间内，面对项目迟迟未取得进展、技术选型约束及频繁需求变更的挑战，独立从零设计前端项目工程架构，高效实现核心功能模块，成功交付初代产品并完成客户展示。最终助力公司赢得项目开发与运维合同，显著增强了我驾驭复杂前端项目的信心与能力。
                  </div>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="flex flex-col space-y-1 py-1">
                <div className="flex items-center gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                    <a
                      className="inline-flex hover:underline"
                      href="https://animallabo.hange.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="animallabo"
                    >
                      动物实验室
                    </a>
                  </h3>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    这是一款养成类游戏，玩家可交友、聊天、装饰房间、完成任务获取奖励等。游戏在2013年从零开始开发，短期内经过多次重构，形成清晰高效、可维护性高的架构。
                    <ul className="list-inside list-disc">
                      <li>项目至今稳定运行约12年，累计百余次功能迭代，每周定期举办周期活动，架构依旧保持高效可维护。</li>
                      <li>独立负责全部JavaScript编码及部分CSS样式适配，与日本同事（负责设计）合作，曾获日本Hangame网站游戏人气排行榜第二名。</li>
                      <li>项目成功赢得日本团队尊重，为复杂前端项目设计积累宝贵经验。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="flex flex-col space-y-1 py-1">
                <div className="flex items-center gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                    <a
                      className="inline-flex hover:underline"
                      href="https://nhn-techorus.com/c-chorus/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="c-chorus"
                    >
                      C-Chorus
                    </a>
                  </h3>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    使用React负责核心功能模块的设计与实现。主要工作包括：与产品团队协作，优化用户界面和交互体验，实现高效的数据展示与管理页面；对接后端API，实现多项云服务功能（如AWS/Google Cloud费用管理、服务监控等）；参与组件库的开发与维护，提升前端代码复用性和项目可维护性。项目上线后，有效提升了平台的易用性和客户满意度。
                  </div>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="flex flex-col space-y-1 py-1">
                <div className="flex items-center gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                    <a
                      className="inline-flex hover:underline"
                      href="https://www.comico.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="comico"
                    >
                      Comico
                    </a>
                  </h3>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    使用Vue负责核心页面与组件的开发和维护。主导实现了响应式布局，确保网站在各类电子设备（PC、平板、手机）上均有良好展示效果。与多语言、多地区团队协作，优化界面体验以适应不同国家和用户群体需求。
                  </div>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="flex flex-col space-y-1 py-1">
                <div className="flex items-center gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                    <a
                      className="inline-flex hover:underline"
                      href="https://www.ypbooks.co.kr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="ypbooks"
                    >
                      영풍문고（YPBooks）
                    </a>
                  </h3>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    基于Vue框架实现页面搭建与功能优化，提升用户体验和页面性能，协作完成多模块开发与上线。
                  </div>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="flex flex-col space-y-1 py-1">
                <div className="flex items-center gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                    <a
                      className="inline-flex hover:underline"
                      href="https://www.kdkd.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="KDKD"
                    >
                      KDKD
                    </a>
                  </h3>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    参与KDKD粉丝互动平台的React前端开发，负责核心功能实现与用户界面优化，支持平台全生命周期（上线、运营、终止）顺利运行。
                  </div>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="flex flex-col space-y-1 py-1">
                <div className="flex items-center gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                    <a
                      className="inline-flex hover:underline"
                      href="https://www.a-q-f.com/contents/extra/saison-toolbar/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="セゾンツールバー"
                    >
                      セゾンツールバー
                    </a>
                  </h3>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    负责开发与维护“セゾンツールバー”浏览器插件，实现积分获取、功能优化及用户体验提升。
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="my-8 w-full space-y-2">
          <h3 className="text-2xl font-bold">个人项目</h3>
          <div className="space-y-4" role="feed" aria-labelledby="projects">
            <article role="article">
              <div className="flex flex-col space-y-1 py-1">
                <div className="flex items-center gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold">
                    <a
                      className="inline-flex hover:underline"
                      href="https://wokanhao.com/tai/signin"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="wokanhao.com company website"
                    >
                      视频摘要生成系统
                    </a>
                  </h3>
                </div>
                <div className="text-muted-foreground text-pretty text-sm">
                  <div className="text-foreground/80 mt-1 text-pretty">
                    结合大模型为视频内容生成摘要。采用现代化的技术栈，确保了高效的性能和良好的可扩展性。
                    <ul className="list-inside list-disc">
                      <li>
                        使用 Next.js 和 Tailwind CSS
                        构建了响应式的前端界面，提供流畅的用户体验。
                      </li>
                      <li>
                        通过 Strapi 和 PostgreSQL
                        实现了强大的后端系统，高效地进行数据管理和存储。
                      </li>
                      <li>
                        集成 LangChain
                        技术，实现对视频内容的智能处理与摘要生成。
                      </li>
                      <li>
                        完成应用部署并优化服务器配置，保障系统的稳定性和高性能表现。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="my-8 w-full space-y-2">
          <h3 className="text-2xl font-bold">技能</h3>
          <ul className="flex list-none flex-wrap gap-1 p-0" aria-label="List of skills">
            <li>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">JavaScript/TypeScript</div>
            </li>
            <li>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">React/Next.js/Vue</div>
            </li>
            <li>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">Node.js/Express.js/Koa.js</div>
            </li>
            <li>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">Strapi</div>
            </li>
            <li>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">Tailwind CSS</div>
            </li>
            <li>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">Linux</div>
            </li>
            <li>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">Mysql/PostgreSQL</div>
            </li>
            <li>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">Nginx</div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
