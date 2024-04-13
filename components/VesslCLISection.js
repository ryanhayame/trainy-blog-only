import { useState, useEffect } from 'react'

const VesslCLISection = () => {
  const [selected, setSelected] = useState(1)

  // xs:bg-none dark:xs:bg-none sm:bg-[url('/cloudSVG.svg')] dark:sm:bg-[url('/cloudSVGdark.svg')]

  return (
    <div
      className="-mt-[100px] mb-12 w-full bg-slate-50 bg-top bg-no-repeat px-4 pt-[90px] dark:bg-darkThemeColor"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="30"
    >
      <div className="mb-16 flex flex-col items-center text-center">
        <h2
          className="text-lg font-semibold uppercase tracking-wide text-logomid"
          data-aos="fade-up"
          data-aos-delay="30"
        >
          Trainy Platform
        </h2>
        <div className="md:w-[780px]">
          <p
            className="mt-2 pb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            Launch Jobs and Scale Up on your Infrastructure
          </p>
        </div>
        <div className="md:w-[750px]">
          <p
            className="mt-2 pb-4 text-lg tracking-tight text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-delay="90"
          >
            Our managed K8s platform uses
            <a href="https://skypilot.readthedocs.io/en/latest/docs/index.html"> SkyPilot</a> as a
            job submission frontend, meaning its never been easier to spin up machines and launch
            training jobs on ANY cloud or on-prem.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 sm:flex-row md:gap-16">
        <div className="hidden flex-col justify-around gap-2 sm:flex">
          <div data-aos="fade-right" data-aos-delay="30">
            <button
              onClick={() => setSelected(1)}
              className={`h-20 w-36 rounded-md border-2 bg-white p-4 text-sm leading-tight text-black shadow-lg dark:bg-gray-900 dark:text-gray-100 dark:shadow-md md:w-44 md:text-[16px] ${
                selected === 1
                  ? 'border-logolight shadow-logolightest dark:border-logodark2 dark:shadow-logodark2'
                  : 'border-transparent dark:shadow-gray-800'
              } hover:border-logolight hover:shadow-logolightest dark:hover:border-logodark2 dark:hover:shadow-logodark2`}
            >
              1. Select Cloud
            </button>
          </div>
          <div data-aos="fade-right" data-aos-delay="60">
            <button
              onClick={() => setSelected(2)}
              className={`h-20 w-36 rounded-md border-2 bg-white p-4 text-sm leading-tight text-black shadow-lg dark:bg-gray-900 dark:text-gray-100 dark:shadow-md md:w-44 md:text-[16px] ${
                selected === 2
                  ? 'border-logolight shadow-logolightest dark:border-logodark2 dark:shadow-logodark2'
                  : 'border-transparent dark:shadow-gray-800'
              } hover:border-logolight hover:shadow-logolightest dark:hover:border-logodark2 dark:hover:shadow-logodark2`}
            >
              2. Specify Instance Types
            </button>
          </div>
          <div data-aos="fade-right" data-aos-delay="90">
            <button
              onClick={() => setSelected(3)}
              className={`h-20 w-36 rounded-md border-2 bg-white p-4 text-sm leading-tight text-black shadow-lg dark:bg-gray-900 dark:text-gray-100 dark:shadow-md md:w-44 md:text-[16px] ${
                selected === 3
                  ? 'border-logolight shadow-logolightest dark:border-logodark2 dark:shadow-logodark2'
                  : 'border-transparent dark:shadow-gray-800'
              } hover:border-logolight hover:shadow-logolightest dark:hover:border-logodark2 dark:hover:shadow-logodark2`}
            >
              3. Add Your Code
            </button>
          </div>
          <div data-aos="fade-right" data-aos-delay="90">
            <button
              onClick={() => setSelected(4)}
              className={`h-20 w-36 rounded-md border-2 bg-white p-4 text-sm leading-tight text-black shadow-lg dark:bg-gray-900 dark:text-gray-100 dark:shadow-md md:w-44 md:text-[16px] ${
                selected === 4
                  ? 'border-logolight shadow-logolightest dark:border-logodark2 dark:shadow-logodark2'
                  : 'border-transparent dark:shadow-gray-800'
              } hover:border-logolight hover:shadow-logolightest dark:hover:border-logodark2 dark:hover:shadow-logodark2`}
            >
              4. Launch
            </button>
          </div>
        </div>
        <div className="mb-2 flex justify-center sm:hidden">
          <div className="mb-6 flex w-5/6 items-center justify-between rounded-md border-2 border-logolight bg-white p-3 text-black shadow-lg shadow-logolightest dark:border-logodark2  dark:bg-gray-900 dark:shadow-sm dark:shadow-logodark2">
            <button
              disabled={selected === 1}
              onClick={() => setSelected((oldSelected) => oldSelected - 1)}
            >
              <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  className={`${
                    selected === 1
                      ? 'fill-gray-300 dark:fill-gray-600'
                      : 'fill-gray-400 dark:fill-gray-300'
                  } `}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 7H7.41L8.7 5.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3C4.11 7.47 4 7.72 4 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L7.41 9H11c.55 0 1-.45 1-1s-.45-1-1-1ZM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Z"
                ></path>
              </svg>
            </button>
            <div className="text-center text-sm font-normal text-gray-900 dark:text-gray-100">
              {selected === 1
                ? '1. Select Cloud'
                : selected === 2
                ? '2. Specify Instance Types'
                : selected === 3
                ? '3. Add Your Code'
                : '4. Launch'}
            </div>
            <button
              disabled={selected === 4}
              onClick={() => setSelected((oldSelected) => oldSelected + 1)}
            >
              <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  className={`${
                    selected === 4
                      ? 'fill-gray-300 dark:fill-gray-600'
                      : 'fill-gray-400 dark:fill-gray-300'
                  } `}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.71 4.29a1.003 1.003 0 0 0-1.42 1.42L8.59 7H5c-.55 0-1 .45-1 1s.45 1 1 1h3.59L7.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3ZM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="30">
          <div className="relative w-fit">
            <div className="absolute -top-10 left-0 mb-4">
              <svg width="32" height="29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <rect width="32" height="28.541" rx="8" fill="#101840"></rect>
                </g>
                <path
                  d="M10.526 20.12c-.587 0-1.087-.15-1.5-.45-.407-.3-.72-.72-.94-1.26-.213-.547-.32-1.18-.32-1.9 0-.727.107-1.36.32-1.9.22-.547.537-.97.95-1.27.413-.307.91-.46 1.49-.46.753 0 1.353.207 1.8.62.447.407.707.96.78 1.66h-1.17a1.62 1.62 0 0 0-.45-.91c-.234-.247-.557-.37-.97-.37-.527 0-.937.233-1.23.7-.293.467-.44 1.11-.44 1.93 0 .813.147 1.453.44 1.92.293.46.703.69 1.23.69.427 0 .753-.11.98-.33.226-.227.373-.523.44-.89h1.17c-.107.687-.377 1.23-.81 1.63-.433.393-1.023.59-1.77.59Zm3.786-.12v-7h1.06v6.05h3.45V20h-4.51Zm6.136 0v-.94h1.52v-5.12h-1.5V13h4.06v.94h-1.5v5.12h1.52V20h-4.1Z"
                  fill="#fff"
                ></path>
                <path
                  d="M0 6.919A6.919 6.919 0 0 1 6.919 0H25.08A6.919 6.919 0 0 1 32 6.919H0Z"
                  fill="#5F5D83"
                ></path>
                <circle cx="4.324" cy="3.46" r="0.865" fill="#E0E7FF"></circle>
                <circle opacity="0.2" cx="7.783" cy="3.46" r="0.865" fill="#E0E7FF"></circle>
                <defs>
                  <filter
                    id="RunCLI_svg__a"
                    x="-36"
                    y="-12"
                    width="104"
                    height="100.541"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="24"></feOffset>
                    <feGaussianBlur stdDeviation="18"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.192157 0 0 0 0 0.180392 0 0 0 0 0.505882 0 0 0 0.08 0"></feColorMatrix>
                    <feBlend
                      mode="multiply"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_5853"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_5853"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          {selected === 1 ? (
            <div className="flex h-fit min-h-[430px] w-96 flex-col rounded-xl bg-slate-900 p-2 text-[13px] leading-tight md:h-[540px] md:w-[520px] md:p-4 md:text-[16px]">
              <div className="mb-2 flex flex-row md:mb-4">
                <div className="m-2 h-4 w-4 rounded-full bg-[#FF605C]"></div>
                <div className="m-2 h-4 w-4 rounded-full bg-[#FFBD44]"></div>
                <div className="m-2 h-4 w-4 rounded-full bg-[#00CA4E]"></div>
              </div>
              <div className="flex w-full flex-col rounded-xl px-2 md:px-4">
                <p className="text-gray-200 dark:text-gray-300">name: torch-ddp-bench</p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">
                  resources:
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">cloud: kubernetes</p>
                </p>
              </div>
            </div>
          ) : null}
          {selected === 2 ? (
            <div className="flex h-fit min-h-[430px] w-96 flex-col rounded-xl bg-slate-900 p-2 text-[13px] leading-tight md:h-[540px] md:w-[520px] md:p-4 md:text-[16px]">
              <div className="mb-2 flex flex-row md:mb-4">
                <div className="m-2 h-4 w-4 rounded-full bg-[#FF605C]"></div>
                <div className="m-2 h-4 w-4 rounded-full bg-[#FFBD44]"></div>
                <div className="m-2 h-4 w-4 rounded-full bg-[#00CA4E]"></div>
              </div>
              <div className="flex w-full flex-col rounded-xl px-2 md:px-4">
                <p className="text-gray-200 dark:text-gray-300">name: torch-ddp-bench</p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">num_nodes: 2</p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">
                  resources:
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                    accelerators: H100:8
                  </p>
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">use_spot: True</p>
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">cloud: kubernetes</p>
                </p>
              </div>
            </div>
          ) : null}
          {selected === 3 ? (
            <div className="flex h-fit min-h-[430px] w-96 flex-col rounded-xl bg-slate-900 p-2 text-[13px] leading-tight md:h-[540px] md:w-[520px] md:p-4 md:text-[16px]">
              <div className="mb-2 flex flex-row md:mb-4">
                <div className="m-2 h-4 w-4 rounded-full bg-[#FF605C]"></div>
                <div className="m-2 h-4 w-4 rounded-full bg-[#FFBD44]"></div>
                <div className="m-2 h-4 w-4 rounded-full bg-[#00CA4E]"></div>
              </div>
              <div className="flex w-full flex-col rounded-xl px-2 md:px-4">
                <p className="text-gray-200 dark:text-gray-300">name: torch-ddp-bench</p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">num_nodes: 2</p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">
                  resources:
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                    accelerators: H100:8
                  </p>
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">use_spot: True</p>
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">cloud: kubernetes</p>
                </p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">
                  file_mounts:
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                    ./torch_ddp_benchmark.py: ./examples/torch_ddp_benchmark.py
                  </p>
                </p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">
                  setup: |
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                    pip install torch torchvision
                  </p>
                </p>
              </div>
            </div>
          ) : null}
          {selected === 4 ? (
            <div className="flex h-fit min-h-[430px] w-96 flex-col rounded-xl bg-slate-900 p-2 text-[13px] leading-tight md:h-[540px] md:w-[520px] md:p-4 md:text-[16px]">
              <div className="mb-2 flex flex-row md:mb-4">
                <div className="m-2 h-4 w-4 rounded-full bg-[#FF605C]"></div>
                <div className="m-2 h-4 w-4 rounded-full bg-[#FFBD44]"></div>
                <div className="m-2 h-4 w-4 rounded-full bg-[#00CA4E]"></div>
              </div>
              <div className="flex w-full flex-col rounded-xl px-2 md:px-4">
                <p className="text-gray-200 dark:text-gray-300">name: torch-ddp-bench</p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">num_nodes: 2</p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">
                  resources:
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                    accelerators: H100:8
                  </p>
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">use_spot: True</p>
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">cloud: kubernetes</p>
                </p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">
                  file_mounts:
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                    ./torch_ddp_benchmark.py: ./examples/torch_ddp_benchmark.py
                  </p>
                </p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">
                  setup: |
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                    pip install torch torchvision
                  </p>
                </p>
                <br></br>
                <p className="text-gray-200 dark:text-gray-300">
                  run: |
                  <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                    torchrun \
                    <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                      --nproc_per_node 8 \
                    </p>
                    <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                      --rdzv_id=1 --rdzv_endpoint=${'master_addr'}:1234 \
                    </p>
                    <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                      --rdzv_backend=c10d --nnodes $num_nodes \
                    </p>
                    <p className="ml-3 text-gray-200 dark:text-gray-300 md:ml-4">
                      torch_ddp_benchmark.py --distributed-backend nccl
                    </p>
                  </p>
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default VesslCLISection
