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
                    我在写一份简历中的项目经验
                    这是一款养成类游戏，玩家可以交友，聊天，装饰自己的房间等，可以做任务获得奖励等。我于2013年左右着手开发，从0开始，经过几次重构，达到了自己满意的架构。游戏至今约
                    12
                    年，历经大小功能百余次次添加，周期活动每周定期举行，前端项目yi
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
      </div>
    </div>
  )
}
